import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasTrenComponent } from './empresas-tren.component';

describe('EmpresasTrenComponent', () => {
  let component: EmpresasTrenComponent;
  let fixture: ComponentFixture<EmpresasTrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpresasTrenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresasTrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
