import { Component, OnInit, Input } from '@angular/core';
import { BookModel } from '../book-model';
import { ReviewModel } from '../review-model';

//import {HttpClient, HttpHeaders } from '@angular/common/http';
import { AvatarService } from '../avatar.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

    @Input()
    book: BookModel;

    newReview: ReviewModel;

  constructor(private avatarService: AvatarService) { }

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

         //this.httpClient.post('http://localhost:62144/book/addreview', {body: this.newReview.body, author: this.newReview.author, rating: this.newReview.rating}).subscribe((x) => {console.log(x)});

        this.book.reviews.push(this.newReview);
        this.ngOnInit();
        }
}
