import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Custom components
import { ProductGridComponent } from './product-grid.component';
// Custom modules
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [ProductGridComponent],
  imports: [CommonModule, RouterModule, LazyLoadImageModule],
  exports: [ProductGridComponent],
})
export class ProductGridModule {}
