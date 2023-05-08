import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionalChartComponent } from './nutritional-chart.component';

describe('NutritionalChartComponent', () => {
  let component: NutritionalChartComponent;
  let fixture: ComponentFixture<NutritionalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionalChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
