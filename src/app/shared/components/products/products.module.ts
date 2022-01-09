import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
