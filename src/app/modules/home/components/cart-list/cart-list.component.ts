import { Component, Input, OnInit } from '@angular/core';
import CartItem from 'src/app/core/model/cart-item.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  @Input() items: CartItem[] | null = null;

  constructor() {}

  ngOnInit(): void {
    console.log(this.items)
  }
}
