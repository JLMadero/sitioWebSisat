import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTerritoryComponent } from './hero-territory.component';

describe('HeroTerritoryComponent', () => {
  let component: HeroTerritoryComponent;
  let fixture: ComponentFixture<HeroTerritoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroTerritoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroTerritoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
