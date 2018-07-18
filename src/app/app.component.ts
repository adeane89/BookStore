import { Component } from '@angular/core';

import {CartModel} from './cart-model';

import {CartItemModel} from './cart-item-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  year = new Date().getFullYear();

cart: CartModel = {
    items: [],
    totalquantity: 0,
    totalprice: 0
    };
}
