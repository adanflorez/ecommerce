import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ProductsPageComponent } from './pages/products/products.component';
import { ProductsModule } from 'src/app/shared/components/products/products.module';
import { ProductsDetailPageComponent } from './pages/products-detail-page/products-detail-page.component';


@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductsDetailPageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductsModule
  ]
})
export class HomeModule { }
