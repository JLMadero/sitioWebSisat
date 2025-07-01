import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosAppComponent } from './beneficios-app.component';

describe('BeneficiosAppComponent', () => {
  let component: BeneficiosAppComponent;
  let fixture: ComponentFixture<BeneficiosAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiosAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiosAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
