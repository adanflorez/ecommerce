import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [ProductsComponent, ProductItemComponent],
  imports: [CommonModule, RouterModule, LazyLoadImageModule],
  exports: [ProductsComponent],
})
export class ProductsModule {}
