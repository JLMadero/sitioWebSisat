import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiferenciadoresTerritoryComponent } from './diferenciadores-territory.component';

describe('DiferenciadoresTerritoryComponent', () => {
  let component: DiferenciadoresTerritoryComponent;
  let fixture: ComponentFixture<DiferenciadoresTerritoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiferenciadoresTerritoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiferenciadoresTerritoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
