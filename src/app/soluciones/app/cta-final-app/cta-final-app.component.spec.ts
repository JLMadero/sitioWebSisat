import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaFinalAppComponent } from './cta-final-app.component';

describe('CtaFinalAppComponent', () => {
  let component: CtaFinalAppComponent;
  let fixture: ComponentFixture<CtaFinalAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaFinalAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaFinalAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
