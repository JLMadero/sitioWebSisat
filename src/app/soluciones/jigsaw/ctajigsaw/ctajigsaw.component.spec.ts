import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTAJigsawComponent } from './ctajigsaw.component';

describe('CTAJigsawComponent', () => {
  let component: CTAJigsawComponent;
  let fixture: ComponentFixture<CTAJigsawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTAJigsawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CTAJigsawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
