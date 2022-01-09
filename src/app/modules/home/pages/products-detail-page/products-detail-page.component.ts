import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/app/core/model/product.model';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-products-detail-page',
  templateUrl: './products-detail-page.component.html',
  styleUrls: ['./products-detail-page.component.scss'],
})
export class ProductsDetailPageComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private globalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('id');
      if (productId) {
        this.getProductDetail(productId);
      }
    });
  }

  private getProductDetail(productId: string): void {
    this.globalService.getProductById(productId).subscribe({
      next: (value) => (this.product = value),
      error: (err) => console.error(err),
      complete: () => console.log('producto cargado'),
    });
  }
}
