import { Component, OnInit, Input } from '@angular/core';

import { BookModel } from '../book-model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
    @Input()
    book: BookModel;
    constructor() { }
    ngOnInit() { }
    addToCart() {
        this.book.inventory = this.book.inventory - 1;
        if (this.book.inventory <= 0) {
            this.book.name = this.book.name + '[SOLD OUT]';
        }
    }
}
