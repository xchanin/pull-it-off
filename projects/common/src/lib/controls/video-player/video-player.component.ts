import { Component, Input, OnInit } from '@angular/core';
import { VideoModel } from './../../models/video.model';

@Component({
  selector: 'pio-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  /**
   * Video to play
   */
  // tslint:disable-next-line:no-input-rename
  // tslint:disable-next-line:variable-name
  private _video: VideoModel;
  @Input('video')
  public set Video(val: VideoModel) {

    this._video = val;
  }

  public get Video(): VideoModel {

    return this._video;
  }

  constructor() {}

  ngOnInit(): void {

  }
}
