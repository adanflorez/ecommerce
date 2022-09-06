import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/app/shared/services/global.service';
import { AppState } from 'src/app/store/app.state';
import { selectProductsCartItemsQuantity } from 'src/app/store/products/selectors/products.selectors';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  categories: string[] = [];
  itemsInCartQuantity$: Observable<number> = new Observable();

  constructor(
    private store: Store<AppState>,
    private globalService: GlobalService
  ) {}

  ngOnInit() {
    this.itemsInCartQuantity$ = this.store.select(selectProductsCartItemsQuantity);
    this.getCategories();
  }

  getCategories() {
    this.globalService.getCategories().subscribe({
      next: (value) => {
        this.categories = value;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('terminó');
      },
    });
  }
}
