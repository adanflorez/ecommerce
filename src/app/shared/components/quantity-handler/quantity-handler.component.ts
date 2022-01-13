import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-handler',
  templateUrl: './quantity-handler.component.html',
  styleUrls: ['./quantity-handler.component.scss'],
})
export class QuantityHandlerComponent implements OnInit {
  @Output() decrementQuantity = new EventEmitter<any>();
  @Output() incrementQuantity = new EventEmitter<any>();
  @Input() quantity = 1;

  constructor() {}

  ngOnInit(): void {}

  public increment(): void {
    this.incrementQuantity.emit();
  }

  public decrement(): void {
    this.decrementQuantity.emit();
  }
}
