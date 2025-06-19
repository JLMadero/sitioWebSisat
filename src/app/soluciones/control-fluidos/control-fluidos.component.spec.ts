import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFluidosComponent } from './control-fluidos.component';

describe('ControlFluidosComponent', () => {
  let component: ControlFluidosComponent;
  let fixture: ComponentFixture<ControlFluidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFluidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFluidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
