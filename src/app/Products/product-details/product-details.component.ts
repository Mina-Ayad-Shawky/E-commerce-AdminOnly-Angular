import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
itemDetails:any;
loading:boolean=false;
  constructor(private serv:ProductService , private router:ActivatedRoute) {
    this.loading=true;
    let id=this.router.snapshot.paramMap.get('id');
    // console.log(id);
    this.serv.getById(id).subscribe((data:any)=>{
      this.itemDetails=data
      this.loading=false;
    })
  }

  ngOnInit(): void {
  }
 
}
