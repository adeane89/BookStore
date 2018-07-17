import { Component, OnInit } from '@angular/core';

import { BookModel } from '../book-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
     homeBook: BookModel[] = [{
        id: 1,
        name: 'Harry Potter and the Sorcerer\'s Stone',
        price: 19.99,
        description: 'The wonderful wizarding world of Harry Potter',
        fullImagePath: './assets/hpsorcerers.jpg',
        author: 'J.K. Rowling',
        inventory: 10,
        formats: ['eBook', 'paperback', 'hardcover']
     },
                           {
        id: 2,
        name: 'Harry Potter and the Chamber of Secrets',
        price: 19.99,
        description: 'The wonderful wizarding world of Harry Potter',
        fullImagePath: './assets/hpchamber.jpg',
        author: 'J.K. Rowling',
        inventory: 12,
        formats: ['eBook', 'paperback', 'hardcover']
    },
                            {
        id: 3,
        name: 'Harry Potter and the Prisoner of Azkaban',
        price: 19.99,
        description: 'The wonderful wizarding world of Harry Potter',
        fullImagePath: './assets/hpprisoner1.jpg',
        author: 'J.K. Rowling',
        inventory: 1,
        formats: ['eBook', 'paperback', 'hardcover']
    },
                            {
        id: 4,
        name: 'Harry Potter and the Goblet of Fire',
        price: 19.99,
        description: 'The wonderful wizarding world of Harry Potter',
        fullImagePath: './assets/hpgoblet.jpg',
        author: 'J.K. Rowling',
        inventory: 6,
        formats: ['eBook', 'paperback', 'hardcover']
    },
                            {
        id: 5,
        name: 'Harry Potter and the Order of the Phoenix',
        price: 19.99,
        description: 'The wonderful wizarding world of Harry Potter',
        fullImagePath: './assets/hporder.jpg',
        author: 'J.K. Rowling',
        inventory: 6,
        formats: ['eBook', 'paperback', 'hardcover']
    },
                            {
        id: 6,
        name: 'Harry Potter and the Half-Blood Prince',
        price: 19.99,
        description: 'The wonderful wizarding world of Harry Potter',
        fullImagePath: './assets/hphalf.jpg',
        author: 'J.K. Rowling',
        inventory: 6,
        formats: ['eBook', 'paperback', 'hardcover']
    },
                            {
        id: 7,
        name: 'Harry Potter and the Deathly Hallows',
        price: 19.99,
        description: 'The wonderful wizarding world of Harry Potter',
        fullImagePath: './assets/hpdeathly.jpg',
        author: 'J.K. Rowling',
        inventory: 6,
        formats: ['eBook', 'paperback', 'hardcover']
    }];
  constructor() { }

  ngOnInit() {
  }

}
