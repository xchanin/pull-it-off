import { MatIconRegistry } from '@angular/material/icon';
import { VideoModel } from './../../../../../common/src/lib/models/video.model';
import { VideoService } from './../../../../../common/src/lib/services/video/video.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SVGToMatIconModel, SvgToMatIconService } from '@lowcodeunit/lcu-icons-common';

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


  private  path: string  = '/assets/images/svgs/'; // test

  constructor(
    protected videoService: VideoService,
    protected domSanitizer: DomSanitizer,
    protected matIconRegistry: MatIconRegistry,
    protected svgToMatIconService: SvgToMatIconService) {

    this.WelcomeTo = 'Welcome to the home of Pull It Off';

    this.videosLoadedSubscription = this.videoService.Loaded.subscribe((val: boolean) => {
      if (val) {
        this.Video = this.videoService.GetVideoByID(1);
        this.Videos = this.videoService.GetVideos();
      }
    });

// https://medium.com/@anglebrackets.io/angular-materials-mat-icon-35670aa1d3af

    const icons: Array<SVGToMatIconModel> =
    [
      { Name: 'svghome', IconPath: 'home-page.svg' },
      { Name: 'download', IconPath: 'download.svg' },
      { Name: 'test', IconPath: 'test.svg' },
      { Name: 'twitter', IconPath: 'twitter.svg' },
      { Name: 'add', IconPath: 'phone.svg' }
    ];

    this.svgToMatIconService.SetIcons(icons, this.path);
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
