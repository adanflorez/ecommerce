import { Component, Input, OnInit } from '@angular/core';
import Product from 'src/app/core/model/product.model';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
})
export class ProductGridComponent implements OnInit {
  @Input() product: Product | undefined = undefined;

  constructor() {}

  ngOnInit(): void {}
}
