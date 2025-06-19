import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroParouteComponent } from './hero-paroute.component';

describe('HeroParouteComponent', () => {
  let component: HeroParouteComponent;
  let fixture: ComponentFixture<HeroParouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroParouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroParouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
