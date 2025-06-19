import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimoniosParouteComponent } from './testimonios-paroute.component';

describe('TestimoniosParouteComponent', () => {
  let component: TestimoniosParouteComponent;
  let fixture: ComponentFixture<TestimoniosParouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimoniosParouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimoniosParouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
