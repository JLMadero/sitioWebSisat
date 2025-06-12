import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoresSisatComponent } from './valores-sisat.component';

describe('ValoresSisatComponent', () => {
  let component: ValoresSisatComponent;
  let fixture: ComponentFixture<ValoresSisatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValoresSisatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValoresSisatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
