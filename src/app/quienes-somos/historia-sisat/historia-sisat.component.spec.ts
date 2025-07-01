import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaSisatComponent } from './historia-sisat.component';

describe('HistoriaSisatComponent', () => {
  let component: HistoriaSisatComponent;
  let fixture: ComponentFixture<HistoriaSisatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriaSisatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriaSisatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
