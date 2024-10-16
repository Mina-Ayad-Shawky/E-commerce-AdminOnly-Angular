import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  allData: any[] = [];
  allCategories: any[] = [];
  isLoading: boolean = false;
  cartItems: any[] = [];
  itemDetails: any;
  base64: any;
  form!: FormGroup;
  newProductAdd: any;
  constructor(private serv: ProductService, private router: Router, private build: FormBuilder) {

  }



  ngOnInit(): void {
    this.get();
    this.getcategories();

    this.form = this.build.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category: ['', [Validators.required]]
    })

    // this.form.get()
  }

  get() {
    this.isLoading = true;
    this.serv.getAllProducts().subscribe((data: any) => {
      this.allData = data;
      this.isLoading = false;
      // console.log(this.allData);
    }, (error: any) => {
      alert("error")
      this.isLoading = false;

    })
  }
  getcategories() {
    this.isLoading = true;

    this.serv.getcategories().subscribe((data: any) => {
      // console.log(data);
      this.allCategories = data;
      this.isLoading = false;

    }, (error: any) => {
      alert("error from categories")
      this.isLoading = false;

    })
  }

  getSpecificCategory(event: any) {
    let value = event.target.value;
    this.form.get('category')?.setValue(value);
    this.isLoading = true;

    console.log(value);
    if (value == "All") {
      this.get();
      this.isLoading = false;

    } else {
      this.isLoading = true;

      this.serv.getSpecificCategory(value).subscribe((data: any) => {
        this.allData = data;
        this.isLoading = false;

      })
    }

  }


  addtoCart(event: any) {
    if ("cart" in localStorage) {
      this.cartItems = JSON.parse(localStorage.getItem("cart")!);
      let exist = this.cartItems.find(item => item.item.id == event.item.id);
      if (exist) {
        alert('already exist')
        this.cartItems.find(item => item.item.id == event.item.id).quantity = event.quantity
        localStorage.setItem("cart", JSON.stringify(this.cartItems))
      } else {
        this.cartItems.push(event);
        localStorage.setItem("cart", JSON.stringify(this.cartItems))
      }

    } else {
      this.cartItems.push(event);
      localStorage.setItem("cart", JSON.stringify(this.cartItems));
    }
    // console.log(event)
  }
  handleUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {
      this.base64 = event.target.result;
      this.form.get('image')?.setValue(this.base64);

    }
  }
  addProduct() {
    let product = this.form.value;
    this.serv.createProduct(this.addProduct).subscribe((data: any) => {
      console.log(this.form.value);
      console.log('successfuly added');

    })

  }
  editProduct(item: any) {
    this.form.get('title')?.setValue(item.title);
    this.form.get('price')?.setValue(item.price);
    this.form.get('description')?.setValue(item.description);
    this.form.get('category')?.setValue(item.category);
    this.form.get('image')?.setValue(item.image);
    this.base64=item.image;
  }
}
