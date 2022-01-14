import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// Routing module
import { HomeRoutingModule } from './home-routing.module';
// Custom modules
import { ProductGridModule } from 'src/app/shared/components/product-grid/product-grid.module';
import { ProductListModule } from 'src/app/shared/components/product-list/product-list.module';
import { QuantityHandlerModule } from 'src/app/shared/components/quantity-handler/quantity-handler.module';
// Pages
import { ProductsPageComponent } from './pages/products/products.component';
import { ProductsDetailPageComponent } from './pages/products-detail-page/products-detail-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './pages/checkout/checkout-page.component';
// Components
import { CartListComponent } from './components/cart-list/cart-list.component';

@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductsDetailPageComponent,
    CartListComponent,
    CartPageComponent,
    CheckoutPageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductGridModule,
    ProductListModule,
    QuantityHandlerModule,
    ReactiveFormsModule
  ],
})
export class HomeModule {}
