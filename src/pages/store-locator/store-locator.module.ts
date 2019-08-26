import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreLocatorPage } from './store-locator';

@NgModule({
  declarations: [
    StoreLocatorPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreLocatorPage),
  ],
})
export class StoreLocatorPageModule {}
