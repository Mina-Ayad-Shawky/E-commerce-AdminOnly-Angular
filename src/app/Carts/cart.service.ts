import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) {

   }
   getCart(param?:any){
    let params=new HttpParams();
    params=params.append('startDate',param?.start).append('endDate',param?.end)
    return this.http.get('https://fakestoreapi.com/'+'carts',{params:params})
  }
  deleteCart(id:number){
   return this.http.delete('https://fakestoreapi.com/'+'carts/'+id)
  }

  getCartById(id:number){
    return this.http.get('https://fakestoreapi.com/'+'carts/'+id)
  }

  getProductById(id:number){
    return this.http.get('https://fakestoreapi.com/'+'products/'+id)
  }
  }
