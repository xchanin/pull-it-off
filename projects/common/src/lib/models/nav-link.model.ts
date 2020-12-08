/**
 * Model for naviation link structure
 */
export class NavLinkModel {

    /**
     * Menu icon
     */
    public Icon?: string;

    /**
     * Menu label
     */
    public Label: string;

    /**
     * Menu parameter
     */
    public Param?: object;

    /**
     * Navigation URL
     */
    public RouterURL: string;

    constructor(opts: NavLinkModel) {
        Object.assign(this, opts); // destructure values
    }
}