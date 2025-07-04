import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiferenciadoresGpsComponent } from './diferenciadores-gps.component';

describe('DiferenciadoresGpsComponent', () => {
  let component: DiferenciadoresGpsComponent;
  let fixture: ComponentFixture<DiferenciadoresGpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiferenciadoresGpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiferenciadoresGpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
