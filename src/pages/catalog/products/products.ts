import { Component } from '@angular/core';
import { APIService } from '../../../services/api_service';
import { CartService } from '../../../services/cart_service';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ModalController, Alert, AlertController} from 'ionic-angular';

/**
 * Products list page component
 */
@IonicPage()
@Component({
    templateUrl: 'products.html'
})
export class ProductsPage {
    public products;
    //public addons;
    public initialProducts;
    public category;
    public searchQ = '';
    public layout = 1;

    constructor(
        private nav: NavController,
        private apiService: APIService,
        private params: NavParams,
        private cart: CartService,
        private alertCtrl: AlertController
    ) {
      this.layout = this.apiService.getSettings().products_layout;
        this.products = [];
        this.category = params.get('category');
        if (this.category == null) {
            location.href = '/';
        }
    }
    addonsList1:any=[];
    addonsList2:any=[];
    productsList:any=[];

    ionViewWillEnter() {
        if (this.category == null) {
            return;
        }
        this.apiService.getProducts(this.category.id).then((response) => {
            this.products = response.json();
            this.initialProducts = response.json();
            for (let i = 0; i < this.products.length; i++) {
                this.products[i].added = this.cart.hasItem(this.products[i]);
            }

        });
        this.apiService.getAddons1().subscribe(data => {
            this.addonsList1 = data;
            console.log('Addonssss1 : ', this.addonsList1);
          }
          );

        this.apiService.getAddons2().subscribe(data => {
            this.addonsList2 = data;
            console.log('Addonssss2 : ', this.addonsList2);
          }
          );

          this.apiService.getProductsNew().subscribe(data => {
            this.productsList = data;
            console.log('Addonssss3 : ', this.productsList);
          }
          );
    }

    onSearchInput($event) {
        this.products = this.initialProducts.filter(p => {
            return p.name.toLowerCase().indexOf(this.searchQ.toLowerCase()) >= 0;
        });
    }

 addToCart(product){
          //console.log("work" + product);
          this.apiService.getProducts(this.category.id).then((response) => {
            this.products = response.json();
            this.initialProducts = response.json();
            console.log("testing", this.products);
            //console.log("testing2", product.addon_sets[0].name);
            
            this.cart.addItem(product, 1);
            product.added = true;
            //console.log(this.addonsList2)
                for (let j = 0; j < product.addon_sets.length; j++) {
                    
                    
                    if(product.addon_sets.length !== 0){
                        let alert = this.alertCtrl.create();
                        alert.present();
                        alert.addButton({
                            text: 'Done',
                          
                        })
                        alert.setTitle('Choose add ons:');
                        for (let k = 0; k < this.addonsList2.length; k++) {
                            
                            if (product.addon_sets[j].id==this.addonsList2[k].addon_set_id){
                                console.log("ffs", this.addonsList2[k].addon_set_id);
                                alert.addInput({
                                    type: 'checkbox',                
                                    label: this.addonsList2[k].name,
                                    value: this.addonsList2[k].name
                                })

                              
                     
                            }
                         
                        }
                    }
                }
                                
                
            //this.products[i].added = this.cart.hasItem(this.products[i]);
               // console.log(this.products);
                //console.log(this.category.id);
           

         

        });
        
      


        
    }
    
}
