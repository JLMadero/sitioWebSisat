import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosParouteComponent } from './beneficios-paroute.component';

describe('BeneficiosParouteComponent', () => {
  let component: BeneficiosParouteComponent;
  let fixture: ComponentFixture<BeneficiosParouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiosParouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiosParouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
