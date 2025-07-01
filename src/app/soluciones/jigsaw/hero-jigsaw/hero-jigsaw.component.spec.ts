import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroJigsawComponent } from './hero-jigsaw.component';

describe('HeroJigsawComponent', () => {
  let component: HeroJigsawComponent;
  let fixture: ComponentFixture<HeroJigsawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroJigsawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroJigsawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
