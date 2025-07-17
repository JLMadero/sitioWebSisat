import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionamientoTerritoryComponent } from './funcionamiento-territory.component';

describe('FuncionamientoTerritoryComponent', () => {
  let component: FuncionamientoTerritoryComponent;
  let fixture: ComponentFixture<FuncionamientoTerritoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionamientoTerritoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionamientoTerritoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
