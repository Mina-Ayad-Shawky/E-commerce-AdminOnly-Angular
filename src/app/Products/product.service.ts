import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAllProducts(){
    return this.http.get('https://fakestoreapi.com/' + 'products')
  }
  getcategories(){
    return this.http.get('https://fakestoreapi.com/'+ 'products/categories')
  }
  getSpecificCategory(keyword:string){
    return this.http.get('https://fakestoreapi.com/' + 'products/category/'+ keyword)
  }
  getById(id:any){
   return this.http.get('https://fakestoreapi.com/'+'products/'+id)
  }
  createProduct(model:any){
    return this.http.post('https://fakestoreapi.com/'+'products',model)
  }
}
