import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Models
import Product from 'src/app/core/model/product.model';
import CartItem from 'src/app/core/model/cart-item.model';
// Services
import { GlobalService } from 'src/app/shared/services/global.service';
// Store
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addItemToCart } from 'src/app/store/products/actions/product.actions';
import { Observable } from 'rxjs';
import { selectProductsCartItems } from 'src/app/store/products/selectors/products.selectors';

@Component({
  selector: 'app-products-detail-page',
  templateUrl: './products-detail-page.component.html',
  styleUrls: ['./products-detail-page.component.scss'],
})
export class ProductsDetailPageComponent implements OnInit {
  product: Product | undefined;
  quantity: number = 1;
  cartItems$: Observable<ReadonlyArray<CartItem>> = new Observable();

  constructor(
    private route: ActivatedRoute,
    private globalService: GlobalService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('id');
      if (productId) {
        this.getProductDetail(productId);
      }
    });
    this.cartItems$ = this.store.select(selectProductsCartItems);
  }

  private getProductDetail(productId: string): void {
    this.globalService.getProductById(productId).subscribe({
      next: (value) => (this.product = value),
      error: (err) => console.error(err),
      complete: () => console.log('producto cargado'),
    });
  }

  public addItemToCart() {
    const cartItem: CartItem = {
      product: this.product!,
      quantity: this.quantity,
    };
    this.store.dispatch(addItemToCart({ item: cartItem }));
  }
}
