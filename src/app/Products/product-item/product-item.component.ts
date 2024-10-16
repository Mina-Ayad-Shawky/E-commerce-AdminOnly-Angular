import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() item:any
@Output() selectedItem=new EventEmitter()
Clicked:boolean=false;
quantity:number=1;
  constructor() { }


  ngOnInit(): void {
  }
sendItem(){
  this.selectedItem.emit({item:this.item,quantity:this.quantity})
  this.Clicked=false;
}
}
