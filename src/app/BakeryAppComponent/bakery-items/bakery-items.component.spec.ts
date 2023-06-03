import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryItemsComponent } from './bakery-items.component';

describe('BakeryItemsComponent', () => {
  let component: BakeryItemsComponent;
  let fixture: ComponentFixture<BakeryItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BakeryItemsComponent]
    });
    fixture = TestBed.createComponent(BakeryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
