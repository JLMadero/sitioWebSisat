import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoCamarasComponentComponent } from './contacto-camaras-component.component';

describe('ContactoCamarasComponentComponent', () => {
  let component: ContactoCamarasComponentComponent;
  let fixture: ComponentFixture<ContactoCamarasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoCamarasComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoCamarasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
