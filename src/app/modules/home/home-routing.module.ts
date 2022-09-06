import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsDetailPageComponent } from './pages/products-detail-page/products-detail-page.component';
import { ProductsPageComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
  },
  {
    path: 'products',
    component: ProductsPageComponent,
  },
  {
    path: 'product/:id',
    component: ProductsDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
