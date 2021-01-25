import { Component, OnInit } from '@angular/core';
import { DynamicGridModel } from '../../models/dynamic-grid.model';

@Component({
  selector: 'pio-dynamic-grid',
  templateUrl: './dynamic-grid.component.html',
  styleUrls: ['./dynamic-grid.component.scss']
})
export class DynamicGridComponent implements OnInit {

  public ColumnRows: Array<DynamicGridModel>;

  constructor() { }

  ngOnInit(): void {
    this.setGridLayout();
  }

  public Resize(cell: DynamicGridModel): void {

    this.ColumnRows.find((c: DynamicGridModel) => {
      c.IsExpanded = !c.IsExpanded;

      if (c.ID === cell.ID) {
        c.IsExpanded = true;
        c.ColumnSize = 3;
        c.RowSize = 3;
      } else {
        if (c.ColumnSize > 1) {
          c.ColumnSize -= 1;
        }
        if (c.BaseRowSize > 1) {
          c.RowSize -= 1;
        }
        // c.ColumnSize = 1;
        // c.RowSize = 1;
      }

      // if (c.ID === cell.ID) {
      //   c.PreviousColumn = c.Column
      //   c.PreviousRow = c.PreviousRow;

      //   c.Column = 'span 3';
      //   c.Row = 'span 3';
      // }

      // if (c.ID !== cell.ID) {
      //   c.Column = 'span 1';
      //   c.Row = 'span 1';
      //  }

      // if (!c.PreviousRow && !c.PreviousColumn) { return; }
      // debugger;
      // c.Column = c.PreviousColumn;
      // c.Row = c.PreviousRow;
    });
  }

  /**
   * Set up the initial grid layout
   */
  protected setGridLayout(): void {
     this.ColumnRows = [
      //  new DynamicGridModel('Grid-1', 'span 2', 'span 1'),
      //  new DynamicGridModel('Grid-2', 'span 2', 'span 2'),
      //  new DynamicGridModel('Grid-3', 'span 1', 'span 1'),
      //  new DynamicGridModel('Grid-4', 'span 1', 'span 3'),
      //  new DynamicGridModel('Grid-5', 'span 3', 'span 1'),
      //  new DynamicGridModel('Grid-6', 'span 1', 'span 1'),
      //  new DynamicGridModel('Grid-7', 'span 1', 'span 1'),
      //  new DynamicGridModel('Grid-8', 'span 1', 'span 1'),
      //  new DynamicGridModel('Grid-9', 'span 2', 'span 1')
      new DynamicGridModel('Grid-1', 2, 1),
       new DynamicGridModel('Grid-2', 2, 2),
       new DynamicGridModel('Grid-3', 1, 1),
       new DynamicGridModel('Grid-4', 1, 3),
       new DynamicGridModel('Grid-5', 3, 1),
       new DynamicGridModel('Grid-6', 1, 1),
       new DynamicGridModel('Grid-7', 1, 1),
       new DynamicGridModel('Grid-8', 1, 1),
       new DynamicGridModel('Grid-9', 2, 1),
       new DynamicGridModel('Grid-10', 2, 2)
     ];
  }
}
