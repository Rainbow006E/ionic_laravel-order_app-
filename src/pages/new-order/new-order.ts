import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { APIService } from '../../services/api_service';
import { UtilService } from '../../services/util_service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TabsPage } from "../tabs/tabs";
import { PushService } from '../../services/push_service';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the NewOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-order',
  templateUrl: 'new-order.html',
})
export class NewOrderPage {

  public loginForm: FormGroup;
	public active: boolean;
	public multipleCities = false;
  public cities:any[] = [];
  public cat:any[];
  public add: any=[];
  public del:any;
  areasList:any=[];

  

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private apiService: APIService,
      private nav: NavController,
      private builder: FormBuilder,
      private util: UtilService,
      private push: PushService,
      private storage: Storage,
      private translate: TranslateService) {

        
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

   

    this.del = this.apiService.getDeliveryAreas();
    console.log("delivery" + this.del);



  }
    getAreas(){
      this.apiService.getAreas().subscribe(data => {
        this.areasList = data;
        console.log('Areas : ', this.areasList[0].name);
      }
      );
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewOrderPage');
  }

  openOrder(){
    this.navCtrl.push('CategoriesPage');
  }

  

}
