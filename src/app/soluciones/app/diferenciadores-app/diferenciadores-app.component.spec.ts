import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiferenciadoresAppComponent } from './diferenciadores-app.component';

describe('DiferenciadoresAppComponent', () => {
  let component: DiferenciadoresAppComponent;
  let fixture: ComponentFixture<DiferenciadoresAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiferenciadoresAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiferenciadoresAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
