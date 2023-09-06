import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatComponent } from './eat.component';

describe('EatComponent', () => {
  let component: EatComponent;
  let fixture: ComponentFixture<EatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EatComponent]
    });
    fixture = TestBed.createComponent(EatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
