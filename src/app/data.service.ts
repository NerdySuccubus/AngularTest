import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('assets/products.json')
  }

  getProduct(id){
    return this.http.get(`assets/p${id}.json`)
  }

}

