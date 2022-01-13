import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import CartItem from 'src/app/core/model/cart-item.model';
import { AppState } from 'src/app/store/app.state';
import { selectProductsTotalPrice } from 'src/app/store/products/selectors/products.selectors';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  @Input() items: CartItem[] | null = null;

  totalPrice$: Observable<number> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.totalPrice$ = this.store.select(selectProductsTotalPrice);
  }
}
