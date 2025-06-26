import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosCamarasComponentComponent } from './beneficios-camaras-component.component';

describe('BeneficiosCamarasComponentComponent', () => {
  let component: BeneficiosCamarasComponentComponent;
  let fixture: ComponentFixture<BeneficiosCamarasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiosCamarasComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiosCamarasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
