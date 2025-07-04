import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosGpsComponent } from './beneficios-gps.component';

describe('BeneficiosGpsComponent', () => {
  let component: BeneficiosGpsComponent;
  let fixture: ComponentFixture<BeneficiosGpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiosGpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiosGpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
