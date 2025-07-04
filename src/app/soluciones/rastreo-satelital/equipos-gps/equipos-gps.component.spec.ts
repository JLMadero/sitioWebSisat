import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposGpsComponent } from './equipos-gps.component';

describe('EquiposGpsComponent', () => {
  let component: EquiposGpsComponent;
  let fixture: ComponentFixture<EquiposGpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquiposGpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquiposGpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
