import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimaMillaComponent } from './ultima-milla.component';

describe('UltimaMillaComponent', () => {
  let component: UltimaMillaComponent;
  let fixture: ComponentFixture<UltimaMillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UltimaMillaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltimaMillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
