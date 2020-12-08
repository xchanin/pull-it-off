import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PullItOffModel } from '../../models/pull-it-off.model';

@Component({
  selector: 'lcu-pull-it-off',
  templateUrl: './pull-it-off.component.html',
  styleUrls: ['./pull-it-off.component.scss']
})
export class PullItOffComponent implements OnInit {

  @Input() public card: PullItOffModel;

  @Output() public cardSelected: EventEmitter<any>;

  constructor() {
    this.cardSelected = new EventEmitter<any>();
  }

  public ngOnInit(): void { }

  public SelectCard(url?: string): void {
    this.cardSelected.emit();

    if (url) {
      window.open(url);
    }
  }

}
