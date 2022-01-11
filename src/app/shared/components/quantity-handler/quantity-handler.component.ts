import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-handler',
  templateUrl: './quantity-handler.component.html',
  styleUrls: ['./quantity-handler.component.scss'],
})
export class QuantityHandlerComponent implements OnInit {
  @Output() updateQuantity = new EventEmitter<number>();

  quantity = 1;

  constructor() {}

  ngOnInit(): void {}

  public increment(): void {
    this.quantity += 1;
    this.updateQuantity.emit(this.quantity);
  }

  public decrement(): void {
    if (this.quantity === 1) return;
    this.quantity -= 1;
    this.updateQuantity.emit(this.quantity);
  }
}
