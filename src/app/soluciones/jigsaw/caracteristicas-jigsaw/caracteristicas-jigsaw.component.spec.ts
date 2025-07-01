import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasJigsawComponent } from './caracteristicas-jigsaw.component';

describe('CaracteristicasJigsawComponent', () => {
  let component: CaracteristicasJigsawComponent;
  let fixture: ComponentFixture<CaracteristicasJigsawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaracteristicasJigsawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristicasJigsawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
