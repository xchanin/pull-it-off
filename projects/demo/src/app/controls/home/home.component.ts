import { VideoModel } from './../../../../../common/src/lib/models/video.model';
import { VideoService } from './../../../../../common/src/lib/services/video/video.service';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public WelcomeTo: string;

  /**
   * Selected video, video passed to the video component
   */
  public Video: VideoModel;

  protected videoLoadedSubscription: Subscription;

  constructor(protected videoService: VideoService) {

    this.WelcomeTo = 'Welcome to the home of Pull it Off';

    this.videoLoadedSubscription = this.videoService.Loaded.subscribe((val: boolean) => {
      if (val) {
        this.Video = this.videoService.GetVideoByID(1);
      }
    });
  }

  // Lifecycle hooks
  public ngOnDestroy(): void {

    this.videoLoadedSubscription.unsubscribe();
  }
  public ngOnInit(): void {

    // Load all videos
    this.videoService.LoadVideos();
  }

}
