import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { WavePipe } from './wave.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { ReviewsComponent } from './reviews/reviews.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes= [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'cart', component: CartComponent},
    { path: '**', component: NotFoundComponent }
]
 //every route goes to the home component

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    WavePipe,
    NavbarComponent,
    TabsComponent,
    ReviewsComponent,
    CartComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(
		  appRoutes,
      		{ enableTracing: true } // <-- debugging purposes only
	  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
