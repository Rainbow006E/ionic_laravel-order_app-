import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewOrderPage } from './new-order';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    NewOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(NewOrderPage),
    TranslateModule.forChild()
  ],
})
export class NewOrderPageModule {}
