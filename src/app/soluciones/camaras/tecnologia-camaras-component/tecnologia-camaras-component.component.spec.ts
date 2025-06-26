import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaCamarasComponentComponent } from './tecnologia-camaras-component.component';

describe('TecnologiaCamarasComponentComponent', () => {
  let component: TecnologiaCamarasComponentComponent;
  let fixture: ComponentFixture<TecnologiaCamarasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnologiaCamarasComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiaCamarasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
