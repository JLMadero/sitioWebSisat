import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimoniosTerritoryComponent } from './testimonios-territory.component';

describe('TestimoniosTerritoryComponent', () => {
  let component: TestimoniosTerritoryComponent;
  let fixture: ComponentFixture<TestimoniosTerritoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimoniosTerritoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimoniosTerritoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
