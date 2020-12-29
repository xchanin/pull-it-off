import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { VideoModel } from '../../models/video.model';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class VideoService {

  /**
   * If videos are loaded or not
   */
  public Loaded = new Subject<boolean>();

  /**
   * List of videos
   */
  protected videos: Array<VideoModel>;

  constructor(protected database: AngularFireDatabase) {
  }

  protected isLoaded(): void {

    this.Loaded.next(
      this.videos && this.videos.length > 0 ? true : false
    );
  }

  /**
   * Sets local data ('Videos')
   */
  public LoadVideos(): void {

      // Return videos from firebase
      this.database.list('/videos').valueChanges()
      .subscribe(
        (videos: Array<VideoModel>) => {
        this.videos = videos;
        this.isLoaded();
      });
  }

  /**
   * Return a specific video
   *
   * @param id value to find video
   *
   */
  public GetVideoByID(id: number): VideoModel {

    return this.videos.find((video: VideoModel) => {
     // convert string returned from Firebase to number
     return Number(video.ID) === id;
    });
  }

  /**
   * Return all videos
   */
  public GetVideos(): Array<VideoModel> {

    return this.videos;
  }

}
