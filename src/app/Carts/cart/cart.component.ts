import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  loading: boolean = false;
  cartItems: any;
  cartDetails: any;
  products: any[] = [];
  totalPrice: any;
  // totalPrice: any;
  // wellDone: boolean = false;
  form!: FormGroup
  constructor(private serv: CartService, private build: FormBuilder) {
    this.serv.getCart().subscribe((data: any) => {
      this.cartItems = data;
    })


    this.form = this.build.group({
      start: [''],
      end: ['']
    })
  }

  ngOnInit(): void {
  }




  onDelete(id: number) {
    this.serv.deleteCart(id).subscribe((data: any) => {

    })
  }

  applyFilter() {
    console.log(this.form.value);
    let param = this.form.value;
    this.serv.getCart(param).subscribe((data: any) => {
      this.cartItems = data;
    })
  }

  showCartDetails(id: number) {
    this.products = [];
    this.totalPrice = 0;
    this.serv.getCartById(id).subscribe((data: any) => {
      console.log(data);
      this.cartDetails = data;

      for (let i in this.cartDetails.products) {
        this.serv.getProductById(this.cartDetails.products[i].productId).subscribe((data: any) => {
          // console.log(data);
          this.products.push({ item: data, quantity: this.cartDetails.products[i].quantity })
          console.log(this.products);
          this.totalPrice=this.totalPrice+data.price*this.cartDetails.products[i].quantity;
        })
      }
    })
  }

}
