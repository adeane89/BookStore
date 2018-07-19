import { Component, OnInit, Input } from '@angular/core';
import { BookModel } from '../book-model';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

    @Input()
    book: BookModel;

    tab: number;
    constructor() { }
    ngOnInit() {
        this.tab =1;
  }
    setTab(selectedTab: number) {
        this.tab = selectedTab;
        return false;
    }
}
