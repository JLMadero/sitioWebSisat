import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroQuienesComponent } from './hero-quienes.component';

describe('HeroQuienesComponent', () => {
  let component: HeroQuienesComponent;
  let fixture: ComponentFixture<HeroQuienesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroQuienesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroQuienesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
