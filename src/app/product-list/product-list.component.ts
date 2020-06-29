import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Object;



  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    }
    );
  }


}
