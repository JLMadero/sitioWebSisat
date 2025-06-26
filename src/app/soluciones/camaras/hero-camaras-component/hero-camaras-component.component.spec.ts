import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCamarasComponentComponent } from './hero-camaras-component.component';

describe('HeroCamarasComponentComponent', () => {
  let component: HeroCamarasComponentComponent;
  let fixture: ComponentFixture<HeroCamarasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCamarasComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCamarasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
