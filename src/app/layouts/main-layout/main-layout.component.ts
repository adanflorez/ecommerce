import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  categories: string[] = [];

  constructor(private globalService: GlobalService) {}

  ngOnInit() {
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
