import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityHandlerComponent } from './quantity-handler.component';

describe('QuantityHandlerComponent', () => {
  let component: QuantityHandlerComponent;
  let fixture: ComponentFixture<QuantityHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantityHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
