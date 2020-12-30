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

  /**
   * List of all videos
   */
  public Videos: Array<VideoModel>;

  /**
   * Video loaded subscription,
   * used to listen when videos have loaded
   */
  protected videosLoadedSubscription: Subscription;

  constructor(protected videoService: VideoService) {

    this.WelcomeTo = 'Welcome to the home of Pull It Off';

    this.videosLoadedSubscription = this.videoService.Loaded.subscribe((val: boolean) => {
      if (val) {
        this.Video = this.videoService.GetVideoByID(4);
        this.Videos = this.videoService.GetVideos();
      }
    });
  }

  // Lifecycle hooks
  public ngOnDestroy(): void {

    this.videosLoadedSubscription.unsubscribe();
  }

  public ngOnInit(): void {

    // Load all videos
    this.videoService.LoadVideos();
  }
}
