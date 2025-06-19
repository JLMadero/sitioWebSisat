import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoParouteComponent } from './video-paroute.component';

describe('VideoParouteComponent', () => {
  let component: VideoParouteComponent;
  let fixture: ComponentFixture<VideoParouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoParouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoParouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
