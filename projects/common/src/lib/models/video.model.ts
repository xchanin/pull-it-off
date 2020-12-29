export class VideoModel {

    /**
     * Type of video data
     */
    public MimeType: string;

    /**
     * Video ID
     */
    public ID: number;

    /**
     * Set default video
     */
    public IsDefault: boolean;

    /**
     * Video URL
     */
    public URL: string;

    /**
     * Static image of video
     */
    public Poster: string;

    constructor(opts: VideoModel) {
        Object.assign(this, opts); // destructure values
    }
}
