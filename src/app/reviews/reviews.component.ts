import { Component, OnInit, Input } from '@angular/core';
import { BookModel } from '../book-model';
import { ReviewModel } from '../review-model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

    @Input()
    book: BookModel;

    newReview: ReviewModel;

  constructor() { }

  ngOnInit() {
      this.newReview = {
          id: -1,
          createddate: "",
          body: "",
          rating: 5,
          author: ""
      }
  }

    submitClicked(){
        if (!this.book.reviews) {
            this.book.reviews = [];
        }
        this.book.reviews.push(this.newReview);
        //TODO: This does not save reviews! I should figure out a way to send my new review to a "persisted data store" to POST it
        this.ngOnInit();
        }
}
