import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionamientoParouteComponent } from './funcionamiento-paroute.component';

describe('FuncionamientoParouteComponent', () => {
  let component: FuncionamientoParouteComponent;
  let fixture: ComponentFixture<FuncionamientoParouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionamientoParouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionamientoParouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
