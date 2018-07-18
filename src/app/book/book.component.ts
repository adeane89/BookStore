import { Component, OnInit, Input } from '@angular/core';
import { BookModel } from '../book-model';

import { CartModel } from '../cart-model';
import { CartItemModel } from '../cart-item-model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {
    @Input()
    book: BookModel;

    @Input()
    cart: CartModel;

    constructor() { }
    ngOnInit() { }
    addToCart() {
        this.book.inventory = this.book.inventory - 1;
        if (this.book.inventory <= 0) {
            this.book.name = this.book.name + '[SOLD OUT]';
        }

        let existingItem: CartItemModel;
		existingItem = this.cart.items.find(x => x.bookid == this.book.id);

		if(!existingItem) {
			this.cart.items.push({ bookid: this.book.id, name: this.book.name, quantity: 1, unitprice: this.book.price })
		} else {
			existingItem.quantity = existingItem.quantity + 1;
		}

		this.cart.totalquantity = this.cart.totalquantity + 1;
		this.cart.totalprice = this.cart.totalprice + this.book.price;
    }
}
