import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCotizationComponent } from './new-cotization.component';

describe('NewCotizationComponent', () => {
  let component: NewCotizationComponent;
  let fixture: ComponentFixture<NewCotizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCotizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCotizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
