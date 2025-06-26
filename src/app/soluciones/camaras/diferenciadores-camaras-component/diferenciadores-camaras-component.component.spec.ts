import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiferenciadoresCamarasComponentComponent } from './diferenciadores-camaras-component.component';

describe('DiferenciadoresCamarasComponentComponent', () => {
  let component: DiferenciadoresCamarasComponentComponent;
  let fixture: ComponentFixture<DiferenciadoresCamarasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiferenciadoresCamarasComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiferenciadoresCamarasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
