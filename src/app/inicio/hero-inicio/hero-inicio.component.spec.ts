import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInicioComponent } from './hero-inicio.component';

describe('HeroInicioComponent', () => {
  let component: HeroInicioComponent;
  let fixture: ComponentFixture<HeroInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
