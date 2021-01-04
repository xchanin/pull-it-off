import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { ControlList, CrossOrigin } from '../../data-types/video.types';
import { VideoModel } from './../../models/video.model';

@Component({
  selector: 'pio-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})

export class VideoPlayerComponent implements OnInit {

  /**
   * video player element
   */
  @ViewChild('player')
  public Player: ElementRef;

// Inputs

  /**
   * Toggle video auto play
   */
  @Input('auto-play')
  public AutoPlay: boolean;

  /**
   * Hide/Show video controls
   */
  @Input('controls')
  public Controls: boolean;

  /**
   * Hide/Show download, fullscreen, remote playback
   *
   * (nodownload, nofullscreen, noremoteplayback)
   *
   * Experimental and may not work (should not be used in production)
   */
  @Input('controls-list')
  public ControlsList: ControlList;

  /**
   * Indicates whether to use CORS to be used
   * 
   * (anonymous, use-credentials, or '' - empty string is the same as anonymous)
   */
  @Input('cross-origin')
  public CrossOrigin: CrossOrigin;

  /**
   * Hide/Show picture-in-picture option
   *
   * Experimental and may not work (should not be used in production)
   */

  @Input('disable-picture-in-picture')
  public DisablePictureInPicture: boolean;

  /**
   * Whether or not the browser will seek back to the start of the video
   */
  @Input('loop')
  public Loop: boolean;

  // @Input('on-play')
  // public set OnPlay(val: any) {
  //   debugger;
  // }

  /**
   * Default setting of audio
   */
  @Input('muted')
  public Muted: boolean;

  /**
   * Indicates if the video should be played 'inline'
   *
   * Absence doesn't mean the video will be played at fullscreen
   */
  @Input('plays-inline')
  public PlaysInline: boolean;

  /**
   * Video to play
   */
  @Input('video')
  public Video: VideoModel;

  // Outputs

  /**
   * Event when video ends
   */
  @Output('ended')
  public Ended: EventEmitter<boolean>;

  /**
   * Event when video is playing
   */
  @Output('playing')
  public Playing: EventEmitter<boolean>;

  /**
   * Event when video is paused
   */
  @Output('paused')
  public Paused: EventEmitter<boolean>;

  /**
   * Event when volume changes
   */
  @Output('volume-change')
  public VolumeChange: EventEmitter<number>;

  /**
   * Event when video is waiting, lack of data
   */
  @Output('wating')
  public Waiting: EventEmitter<boolean>;

  constructor() {
    this.Ended = new EventEmitter<boolean>();
    this.Playing = new EventEmitter<boolean>();
    this.Paused = new EventEmitter<boolean>();
    this.Waiting = new EventEmitter<boolean>();
    this.VolumeChange = new EventEmitter<number>();
  }

  ngOnInit(): void {

  }

  public PLayVideo(): void {
   // this.Player.play();
  }

  /**
   * Video has ended
   */
  public OnEnded(): void {
    this.Ended.emit(true);
  }

  /**
   * Video is playing
   */
  public OnPlaying(): void {
    this.Playing.emit(true);
  }

  /**
   * Video is paused
   */
  public OnPaused(): void {
    console.log('PAUSED', this.Player.nativeElement.currentTime);
    this.Paused.emit(this.Player.nativeElement.paused);
  }

  /**
   * Audio volume changed
   */
  public OnVolumeChange(evt: Event): void {
    this.VolumeChange.emit(this.Player.nativeElement.volume);
  }

  /**
   * Video is waiting, lack of data
   */
  public OnWaiting(): void {
    this.Waiting.emit(true);
  }

  protected enterFullScreen(): void {}
}
