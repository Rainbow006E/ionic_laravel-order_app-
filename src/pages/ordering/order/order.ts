import {Component} from '@angular/core';
import {CartService} from '../../../services/cart_service';
import {APIService} from "../../../services/api_service";
import {OrderHistoryService} from "../../../services/order_history_service";
import {FormBuilder, Validators, FormGroup } from "@angular/forms";
import {IonicPage, AlertController, ViewController, LoadingController, ModalController} from 'ionic-angular';
import {Stripe} from '@ionic-native/stripe';
import {PayPal, PayPalPayment, PayPalConfiguration} from '@ionic-native/paypal';
import {TranslateService} from '@ngx-translate/core';
import {UtilService} from '../../../services/util_service';
import {NavController, NavParams } from 'ionic-angular';

/**
 * Make an order page component
 */
@IonicPage()
@Component({
  templateUrl: 'order.html'
})
export class OrderPage {
  public orderData;
  public orderForm;
  public formReady: boolean;
  public deliveryPrice;
  public discountPrice;
  public cTotalPrice = 0;
  public cTaxPrice = 0;
  public cPriceWithTax = 0;
  public cFullPrice = 0;
  public cLoyaltyUsed = 0;
  public userData: any = {};

  public loginForm: FormGroup;
	public active: boolean;
	public multipleCities = false;
  public cities:any[] = [];
  public cat:any[];
  public add: any=[];
  public del:any;
  areasList:any=[];

  constructor(
    private cart: CartService,
    private apiService: APIService,
    private builder: FormBuilder,
    private alertCtrl: AlertController,
    public viewCtrl: ViewController,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private historyService: OrderHistoryService,
    private stripe: Stripe,
    private payPal: PayPal,
    private util: UtilService,
    private translate: TranslateService,
    public navCtrl: NavController,
  ) {

    this.getAreas();
    this.active = true;
		const fields = {
			
		};
		this.multipleCities = (this.apiService.getSettings().multiple_cities == 1);
		if (this.multipleCities) {
			fields['city_id'] = [null, Validators.required];
      this.cities = this.apiService.getCities();
      console.log("cities" + this.cities);
		}
    this.loginForm = this.builder.group(fields);
    this.cities = this.apiService.getCities();

    this.cat = this.apiService.getCategories();
    console.log("categories" + this.cat);

    this.add = this.apiService.getAddons1();
    console.log("Addons" + this.add);

    this.del = this.apiService.getDeliveryAreas();
    console.log("delivery" + this.del);

    this.userData = this.apiService.getUserData();
    this.stripe.setPublishableKey(this.apiService.getSettings().stripe_publishable);
    this.deliveryPrice = 0;
    this.orderData = {
      products: cart.getItems()
    };
    this.orderForm = this.builder.group({
      name: [`${this.userData.name}`, Validators.required],
      address: ['', Validators.required],
      phone: [`${this.userData.phone}`, Validators.required],
      promo_code: [''],
      loyalty: [0, Validators.max(this.userData.loyalty_reward)],
      payment_method: ['cash'],
      comment: ''
    });
    this.formReady = true;
    this.discountPrice = null;
  }

  getAreas(){
    this.apiService.getAreas().subscribe(data => {
      this.areasList = data;
      console.log('Areas : ', this.areasList[0].name);
    }
    );
  }

  showAddressWindow() {
    let modal = this.modalCtrl.create('AddressMap');
    modal.onDidDismiss((data) => {
      if (data && data.address) {
        this.orderForm.controls['address'].setValue(data.address);
        this.orderData.lat = data.lat;
        this.orderData.lng = data.lng;
        this.deliveryPrice = data.service_area.price;
        this.orderData.delivery_area_id = data.service_area.id;
        this.calculatePrices();
      }
    });
    modal.present();
  }

  calculatePrices() {
    this.cFullPrice = this.getFullPrice();
    this.discountPrice = this.cFullPrice;
    this.cTotalPrice = this.cartPrice();
    this.cTaxPrice = this.cartTax();
    this.cPriceWithTax = this.cartWithTax();
  }

  ionViewWillEnter() {
    this.validatePromo(true);
    this.calculatePrices();
  }

  validatePromo(supressAlert?: boolean) {
    if (!this.orderForm.value.promo_code || (this.orderForm.value.promo_code == '')) {
      return;
    }
    let data = {
      code: this.orderForm.value.promo_code,
      products: this.cart.getItems()
    };
    this.apiService.validateDiscount(data).subscribe((data) => {
      if (!data.success) {
        this.discountPrice = null;
        if (!supressAlert) {
          let msg = this.translate.instant('order.promo_not_found');
          if (data.code == 400) {
            msg = this.translate.instant('order.promo_invalid');
          }
          this.util.alert(msg, this.translate.instant('order.error_title'));
        }
      }
      else {
        if (!supressAlert) {
          this.util.alert(this.translate.instant('order.promo_applied'), this.translate.instant('order.success'));
        }
        this.discountPrice = data.new_price;
        this.cPriceWithTax = data.new_price_tax;
        this.cTaxPrice = this.cPriceWithTax - this.discountPrice;
      }
    });
  }

  /**
   * Actual submission of order data to server
   */
  

  pushPage(){
    this.navCtrl.push('OrderSuccessPage');
  }

  /**
   * Call PayPal dialog, create a transaction than place an order
   */
  payPayPal() {
    const showPayPalError = () => {
      this.util.alert(this.translate.instant('order.paypal_error'), '');
    }
    this.payPal.init({
      PayPalEnvironmentProduction: this.apiService.getSettings().paypal_client_id,
      PayPalEnvironmentSandbox: this.apiService.getSettings().paypal_client_id
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      // change environment here to start payments processing
      let env = 'PayPalEnvironmentSandbox';
      if (this.apiService.getSettings().paypal_production) {
        env = 'PayPalEnvironmentProduction';
      }
      this.payPal.prepareToRender(env, new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let payment = new PayPalPayment(`${this.cartPrice() + this.deliveryPrice}`, this.apiService.getSettings().paypal_currency, 'Order', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then(data => {
          if (data.response && data.response.state == 'approved') {
            this.orderData.paypal_id = data.response.id;
            //this.realPlaceOrder();
          }
          else {
            showPayPalError();
          }
        }, showPayPalError);
      }, showPayPalError);
    }, showPayPalError);
  }

  /**
   * Call PayPal dialog, get the card token than place an order
   */
  payStripe() {
    let modal = this.modalCtrl.create('CreditCardInput');
    modal.onDidDismiss((data) => {
      if (data && data.number) {
        let loading = this.loadingCtrl.create();
        loading.present();
        this.stripe.createCardToken(data)
          .then(token => {
            loading.dismiss();
            this.orderData.stripe_token = token.id;
            //this.realPlaceOrder();
          })
          .catch(error => {
            loading.dismiss();
            this.util.alert(this.translate.instant('order.payment_error'), '');
          });
      }
    });
    modal.present();
  }

  /**
   * Basic order form submission handler
   * will call corresponding payment method handler
   */
  placeOrder() {
    this.orderData.name = this.orderForm.value.name;
    this.orderData.phone = this.orderForm.value.phone;
    this.orderData.address = this.orderForm.value.address;
    this.orderData.loyalty = this.orderForm.value.loyalty;
    this.orderData.code = this.orderForm.value.promo_code;
    this.orderData.payment_method = this.orderForm.value.payment_method;
    this.orderData.city_id = this.apiService.getUserData().city_id;
    this.orderData.customer_id = this.apiService.getUserData().id;
      
    this.orderData.comment = this.orderForm.value.comment;
    if (this.orderData.payment_method == 'cash') {
      //this.realPlaceOrder();
    }
    if (this.orderData.payment_method == 'stripe') {
      this.payStripe();
    }
    if (this.orderData.payment_method == 'paypal') {
      this.payPayPal();
    }
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  getFullPrice() {
    let result = 0;
    this.cart.getItems().forEach((item) => {
      result = result + item.product.price * item.count;
    });
    return result;
  }

  cartPrice() {
    if (this.discountPrice) {
      return this.discountPrice;
    }
    return this.getFullPrice();
  }

  cartTax() {
    let result = 0;
    this.cart.getItems().forEach((item) => {
      result = result + item.product.price * item.product.tax_value / 100 * item.count;
    });
    return result;
  }

  cartWithTax() {
    if (this.apiService.getSettings().tax_included) {
      return this.cartPrice() + this.deliveryPrice;
    }
    else {
      return this.cartTax() + this.cartPrice() + this.deliveryPrice;
    }
  }

  useReward() {
    this.cLoyaltyUsed = this.orderForm.controls['loyalty'].value;
    if (this.cLoyaltyUsed > this.cTotalPrice) {
      this.cLoyaltyUsed = this.cTotalPrice;
      this.orderForm.controls['loyalty'].setValue(this.cLoyaltyUsed);
    }
  }
}