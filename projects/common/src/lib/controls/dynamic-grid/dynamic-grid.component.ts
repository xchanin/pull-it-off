import { Component, OnInit } from '@angular/core';
import { DynamicGridModel } from '../../models/dynamic-grid.model';
import { ColorConverterService } from '../../services/color/color-converter.service';

@Component({
  selector: 'pio-dynamic-grid',
  templateUrl: './dynamic-grid.component.html',
  styleUrls: ['./dynamic-grid.component.scss']
})
export class DynamicGridComponent implements OnInit {

  public ColumnRows: Array<DynamicGridModel>;

  constructor(protected colorConverterService: ColorConverterService) { 
  }

  ngOnInit(): void {
    this.setGridLayout();
  }

  public Resize(cell: DynamicGridModel): void {

    this.ColumnRows.find((c: DynamicGridModel) => {

      /**
       * set cell's default size
       */
      c.ColumnSize = c.DefaultColumnSize;
      c.RowSize = c.DefaultRowSize;

      /**
       * Reset values to give a new starting point
       */
      c.Order = 0;

      if (c.ID === cell.ID && c.IsExpanded === true) {
        c.IsExpanded = false;

        this.resetDefaults();
        return;
      }

      /**
       * Set new values for the current (clicked) cell
       */
      if (c.ID === cell.ID) {
        c.IsExpanded = true;
        c.ColumnSize = 3;
        c.RowSize = 3;
        c.Order = 0;
        c.IsExpanded = true;

      } else {

        /**
         * Set values of cells not clicked
         */
        c.Order = c.Index + 1;
      //   if (c.ColumnSize > 1) {
      //     c.ColumnSize -= 1;
      //   }
      //   if (c.DefaultRowSize > 1) {
      //     c.RowSize -= 1;
      //   }
      //   c.ColumnSize = 1;
      //   c.RowSize = 1;
      }
    });
  }

  protected resetDefaults(): void {
    this.ColumnRows.forEach((c: DynamicGridModel, index: number) => {
      c.ColumnSize = c.DefaultColumnSize;
      c.RowSize = c.DefaultRowSize;
      c.Order = c.Index;
    });
  }

  /**
   * Set up the initial grid layout
   */
  protected setGridLayout(): void {
     this.ColumnRows = [
       new DynamicGridModel(
        {
          ID: 'Grid-1',
          Index: 0,
          ColumnSize: 2,
          RowSize: 1,
          BackgroundColor: this.colorConverterService.RGBAToHexA([117, 14, 14, 1]),
          Order: 0
        }
      ),
      new DynamicGridModel(
        {
          ID: 'Grid-2',
          Index: 1,
          ColumnSize: 2,
          RowSize: 2,
          BackgroundColor: this.colorConverterService.RGBAToHexA([238, 24, 24, 1]),
          Order: 1
        }
      ),
      new DynamicGridModel(
        {
          ID: 'Grid-3',
          Index: 2,
          ColumnSize: 1,
          RowSize: 1,
          BackgroundColor: this.colorConverterService.RGBAToHexA([14, 93, 117, 1]),
          Order: 2
        }
      ),
      new DynamicGridModel(
        {
          ID: 'Grid-4',
          Index: 3,
          ColumnSize: 1,
          RowSize: 3,
          BackgroundColor: this.colorConverterService.RGBAToHexA([58, 60, 206, 1]),
          Order: 3
        }
      ),
      new DynamicGridModel(
        {
          ID: 'Grid-5',
          Index: 4,
          ColumnSize: 3,
          RowSize: 1,
          BackgroundColor: this.colorConverterService.RGBAToHexA([117, 14, 74, 1]),
          Order: 4
        }
      ),
      new DynamicGridModel(
        {
          ID: 'Grid-6',
          Index: 5,
          ColumnSize: 1,
          RowSize: 1,
          BackgroundColor: this.colorConverterService.RGBAToHexA([14, 117, 112, 1]),
          Order: 5
        }
      ),
      new DynamicGridModel(
        {
          ID: 'Grid-7',
          Index: 6,
          ColumnSize: 1,
          RowSize: 1,
          BackgroundColor: this.colorConverterService.RGBAToHexA([180, 218, 110, 1]),
          Order: 6
        }
      ),
      new DynamicGridModel(
        {
          ID: 'Grid-8',
          Index: 7,
          ColumnSize: 1,
          RowSize: 1,
          BackgroundColor: this.colorConverterService.RGBAToHexA([212, 191, 68, 1]),
          Order: 7
        }
      ),
      new DynamicGridModel(
        {
          ID: 'Grid-9',
          Index: 8,
          ColumnSize: 2,
          RowSize: 1,
          BackgroundColor: this.colorConverterService.RGBAToHexA([114, 19, 19, 1]),
          Order: 8
        }
      ),
      new DynamicGridModel(
        {
          ID: 'Grid-0',
          Index: 9,
          ColumnSize: 2,
          RowSize: 2,
          BackgroundColor: this.colorConverterService.RGBAToHexA([231, 12, 165, 1]),
          Order: 9
        }
      )
     ];
  }
}
