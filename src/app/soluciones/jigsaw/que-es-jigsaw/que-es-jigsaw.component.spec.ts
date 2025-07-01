import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueEsJigsawComponent } from './que-es-jigsaw.component';

describe('QueEsJigsawComponent', () => {
  let component: QueEsJigsawComponent;
  let fixture: ComponentFixture<QueEsJigsawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueEsJigsawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueEsJigsawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
