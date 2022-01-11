import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Product from 'src/app/core/model/product.model';
// Store
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loadProducts } from 'src/app/store/products/actions/product.actions';
import {
  selectProductsLoading,
  selectProductsMostPurchased,
} from 'src/app/store/products/selectors/products.selectors';

@Component({
  selector: 'app-products-page',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  products$: Observable<ReadonlyArray<Product>> = new Observable();
  loading$: Observable<boolean> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectProductsLoading);
    this.products$ = this.store.select(selectProductsMostPurchased);
    this.store.dispatch(loadProducts());
  }
}
