import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './Products/all-products/all-products.component';
import { ProductDetailsComponent } from './Products/product-details/product-details.component';
import { CartComponent } from './Carts/cart/cart.component';

const routes: Routes = [
  {path:"allProducts",component:AllProductsComponent},
  {path:"details/:id",component:ProductDetailsComponent},
  {path:"cart",component:CartComponent},
  {path:"**", redirectTo :"allProducts",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
