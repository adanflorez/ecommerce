import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routing module
import { HomeRoutingModule } from './home-routing.module';
// Custom modules
import { ProductGridModule } from 'src/app/shared/components/product-grid/product-grid.module';
// Pages
import { ProductsPageComponent } from './pages/products/products.component';
import { ProductsDetailPageComponent } from './pages/products-detail-page/products-detail-page.component';
import { ProductListModule } from 'src/app/shared/components/product-list/product-list.module';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductsDetailPageComponent,
    CartListComponent,
    CartPageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductGridModule,
    ProductListModule,
  ],
})
export class HomeModule {}
