import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import Product from 'src/app/core/model/product.model';
import { GlobalService } from 'src/app/shared/services/global.service';
import { AppState } from 'src/app/store/app.state';
import {
  loadProducts,
  loadProductsSuccess,
} from 'src/app/store/products/actions/product.actions';
import { selectProductsLoading, selectProductsMostPurchased } from 'src/app/store/products/selectors/products.selectors';

@Component({
  selector: 'app-products-page',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  products$: Observable<ReadonlyArray<Product>> = new Observable();
  loading$: Observable<boolean> = new Observable();

  constructor(
    private store: Store<AppState>,
    private globalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectProductsLoading);
    this.products$ = this.store.select(selectProductsMostPurchased)
    this.store.dispatch(loadProducts());
    this.globalService.getAllProducts(8).subscribe({
      next: (value) => {
        this.store.dispatch(loadProductsSuccess({ products: value }));
      },
      error: (err) => console.error(err),
    });
  }
}
