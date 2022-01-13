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

import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-products-detail-page',
  templateUrl: './products-detail-page.component.html',
  styleUrls: ['./products-detail-page.component.scss'],
})
export class ProductsDetailPageComponent implements OnInit {
  product: Product | undefined;
  cartItems$: Observable<CartItem[]> = new Observable();

  cartItemsModal: bootstrap.Modal | undefined;
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

  public addItemToCart(element: any) {
    this.cartItemsModal = new bootstrap.Modal(element, {
      keyboard: false,
    });
    this.cartItemsModal?.show();
    const cartItem: CartItem = {
      product: this.product!,
      quantity: 1,
    };
    this.store.dispatch(addItemToCart({ item: cartItem }));
  }

  public closeModal() {
    this.cartItemsModal?.hide();
  }
}
