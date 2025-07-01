import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosJigsawComponent } from './beneficios-jigsaw.component';

describe('BeneficiosJigsawComponent', () => {
  let component: BeneficiosJigsawComponent;
  let fixture: ComponentFixture<BeneficiosJigsawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiosJigsawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiosJigsawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
