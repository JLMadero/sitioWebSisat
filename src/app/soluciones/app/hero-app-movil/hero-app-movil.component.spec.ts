import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAppMovilComponent } from './hero-app-movil.component';

describe('HeroAppMovilComponent', () => {
  let component: HeroAppMovilComponent;
  let fixture: ComponentFixture<HeroAppMovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroAppMovilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroAppMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
