import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import Product from 'src/app/core/model/product.model';
import CartItem from 'src/app/core/model/cart-item.model';
import { AppState } from 'src/app/store/app.state';
import { addItemToCart } from 'src/app/store/products/actions/product.actions';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product | undefined = undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  public addItemToCart() {
    const cartItem: CartItem = { product: this.product!, quantity: 1 };
    this.store.dispatch(addItemToCart({ item: cartItem }));
  }
}
