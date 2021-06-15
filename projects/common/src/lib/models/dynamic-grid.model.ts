export class DynamicGridModel {
    public BackgroundColor?: string;
    public DefaultColumnSize?: number;
    public DefaultRowSize?: number;
    public ColumnSize: number;
    public Index?: number;
    public IsExpanded?: boolean;
    public ID: string;
    public Order?: number;
    public RowSize: number;

    constructor(opts: DynamicGridModel) {
        Object.assign(this, opts); // destructure values

        this.setDefaultSizes();
    }

    /**
     * Set default span values
     */
    protected setDefaultSizes?(): void {
        // debugger;
        this.DefaultColumnSize = this.ColumnSize;
        this.DefaultRowSize = this.RowSize;
    }
}
