import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTecnicaAppComponent } from './info-tecnica-app.component';

describe('InfoTecnicaAppComponent', () => {
  let component: InfoTecnicaAppComponent;
  let fixture: ComponentFixture<InfoTecnicaAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoTecnicaAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoTecnicaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
