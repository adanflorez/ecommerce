import { Component, Input, OnInit } from '@angular/core';
import CartItem from 'src/app/core/model/cart-item.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() cartItem: CartItem | null = null;

  constructor() {}

  ngOnInit(): void {}
}
