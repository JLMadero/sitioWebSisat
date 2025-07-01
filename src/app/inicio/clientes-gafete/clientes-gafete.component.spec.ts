import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesGafeteComponent } from './clientes-gafete.component';

describe('ClientesGafeteComponent', () => {
  let component: ClientesGafeteComponent;
  let fixture: ComponentFixture<ClientesGafeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesGafeteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesGafeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
