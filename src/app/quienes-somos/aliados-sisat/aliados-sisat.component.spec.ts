import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliadosSisatComponent } from './aliados-sisat.component';

describe('AliadosSisatComponent', () => {
  let component: AliadosSisatComponent;
  let fixture: ComponentFixture<AliadosSisatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AliadosSisatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AliadosSisatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
