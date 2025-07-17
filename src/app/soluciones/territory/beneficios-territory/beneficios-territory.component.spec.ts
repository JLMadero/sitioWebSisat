import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosTerritoryComponent } from './beneficios-territory.component';

describe('BeneficiosTerritoryComponent', () => {
  let component: BeneficiosTerritoryComponent;
  let fixture: ComponentFixture<BeneficiosTerritoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiosTerritoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiosTerritoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
