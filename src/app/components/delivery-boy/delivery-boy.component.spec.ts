import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryBoyComponent } from './delivery-boy.component';

describe('DeliveryBoyComponent', () => {
  let component: DeliveryBoyComponent;
  let fixture: ComponentFixture<DeliveryBoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryBoyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliveryBoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
