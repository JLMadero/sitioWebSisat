import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselProyectosComponent } from './carrusel-proyectos.component';

describe('CarruselProyectosComponent', () => {
  let component: CarruselProyectosComponent;
  let fixture: ComponentFixture<CarruselProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselProyectosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruselProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
