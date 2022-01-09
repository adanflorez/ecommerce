import { Component, OnInit } from '@angular/core';
import Product from 'src/app/core/model/product.model';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  products: Product[] = [];

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.globalService.getAllProducts(8).subscribe({
      next: (value) => {
        this.products = value;
      },
      error: (err) => console.error(err),
    });
  }
}
