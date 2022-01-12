import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Custom components
import { ProductsComponent } from './products.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
// Custom modules
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [ProductsComponent, ProductGridComponent],
  imports: [CommonModule, RouterModule, LazyLoadImageModule],
  exports: [ProductsComponent],
})
export class ProductsModule {}
