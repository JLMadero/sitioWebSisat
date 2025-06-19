import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaParouteComponent } from './cta-paroute.component';

describe('CtaParouteComponent', () => {
  let component: CtaParouteComponent;
  let fixture: ComponentFixture<CtaParouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaParouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaParouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
