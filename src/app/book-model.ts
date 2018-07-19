import { ReviewModel } from './review-model';

export class BookModel {
    id: number;
    name: string;
    price: number;
    description: string;
    fullImagePath: string;
    author: string;
    inventory: number;
    formats: string[];
    reviews?: ReviewModel[];
    selectedFormat: string;
}
