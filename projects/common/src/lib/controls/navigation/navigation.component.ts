import { Component, Input, OnInit } from '@angular/core';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'pio-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('side-nav')
  public SideNav: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

}
