import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'pio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('mini-side-nav')
  public MiniSideNav: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

}
