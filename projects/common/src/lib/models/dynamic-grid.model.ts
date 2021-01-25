export class DynamicGridModel {
    public BackgroundColor?: string;
    public BaseColumnSize?: number;
    public BaseRowSize?: number;
    public ColumnSize: number;
    public IsExpanded?: boolean;
    public ID: string;
    public RowSize: number;

    constructor(id: string, col: number, row: number) {
        this.ColumnSize = col;
        this.ID = id;
        this.RowSize = row;
    }

    public SetBaseSizes(): void {
        this.BaseColumnSize = this.ColumnSize;
        this.BaseRowSize = this.RowSize;
    }
}
