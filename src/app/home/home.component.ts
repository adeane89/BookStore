import { Component, OnInit, Input } from '@angular/core';
import { BookModel } from '../book-model';

import {CartModel} from '../cart-model';
import {CartItemModel} from '../cart-item-model';
import {HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    @Input()
    cart: CartModel;
    homeBook: BookModel[];
    constructor(private httpClient: HttpClient) { }
    ngOnInit() {
        this.httpClient.get<BookModel[]>('./assets/book.json').subscribe((results) => {this.homeBook = results});
  }
}
