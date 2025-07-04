import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroGpsComponent } from './hero-gps.component';

describe('HeroGpsComponent', () => {
  let component: HeroGpsComponent;
  let fixture: ComponentFixture<HeroGpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroGpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroGpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
