import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import CartItem from 'src/app/core/model/cart-item.model';
import { AppState } from 'src/app/store/app.state';
import { incrementItemQuantity } from 'src/app/store/products/actions/product.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() cartItem: CartItem | null = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  public increment(): void {
    this.store.dispatch(
      incrementItemQuantity({ product: this.cartItem!.product })
    );
  }
}
