import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllProductsComponent } from './Products/all-products/all-products.component';
import { ProductDetailsComponent } from './Products/product-details/product-details.component';
import { HeaderComponent } from './shared/header/header.component';
import { CartComponent } from './Carts/cart/cart.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SelectComponent } from './shared/select/select.component';
import { ProductItemComponent } from './Products/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    ProductDetailsComponent,
    HeaderComponent,
    CartComponent,
    SpinnerComponent,
    SelectComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
