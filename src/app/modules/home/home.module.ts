import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ProductsPageComponent } from './pages/products/products.component';
import { ProductsModule } from 'src/app/shared/components/products/products.module';


@NgModule({
  declarations: [
    ProductsPageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductsModule
  ]
})
export class HomeModule { }
