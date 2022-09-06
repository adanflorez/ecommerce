import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { QuantityHandlerModule } from '../quantity-handler/quantity-handler.module';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, LazyLoadImageModule, QuantityHandlerModule],
  exports: [ProductListComponent],
})
export class ProductListModule {}
