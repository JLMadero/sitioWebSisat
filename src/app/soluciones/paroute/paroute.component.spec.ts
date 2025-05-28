import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParouteComponent } from './paroute.component';

describe('ParouteComponent', () => {
  let component: ParouteComponent;
  let fixture: ComponentFixture<ParouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
