import { Component, Input, OnInit } from '@angular/core';
import Product from 'src/app/core/model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() category: string = '';
  @Input() products: ReadonlyArray<Product> | null = [];

  constructor() {}

  ngOnInit(): void {}
}
