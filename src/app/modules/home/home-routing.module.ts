import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
