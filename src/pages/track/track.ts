import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { APIService } from '../../services/api_service';

/**
 * Generated class for the TrackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-track',
  templateUrl: 'track.html',
})
export class TrackPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiService: APIService,) {

    this.getDirectory();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackPage');
  }

  directoryList:any=[];
  test:any;
  test1:any;
  
  
    getDirectory(){
      this.apiService.getOrderStatus().subscribe(data => {
        this.directoryList = data;
        console.log('the selected directries from api : ', this.directoryList.order_statuses[0].id);
        this.test=this.directoryList.order_statuses[0].id;
        this.test1=this.directoryList.order_statuses[0].name;
      }
      );
    }

}
