import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { HomeRoutingModule } from './home-routing.module';
import { ProductsModule } from 'src/app/shared/components/products/products.module';



@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductsModule
  ]
})
export class HomeModule { }
