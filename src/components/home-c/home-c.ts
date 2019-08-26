import { Component } from '@angular/core';

/**
 * Generated class for the HomeCComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home-c',
  templateUrl: 'home-c.html'
})
export class HomeCComponent {

  text: string;

  constructor() {
    console.log('Hello HomeCComponent Component');
    this.text = 'Hello World';
  }

}
