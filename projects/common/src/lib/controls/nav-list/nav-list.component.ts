import { Component, Input, OnInit } from '@angular/core';
import { NavLinkModel } from '../../models/nav-link.model';

@Component({
  selector: 'pio-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('nav-links')
  public NavLinks: Array<NavLinkModel>;

  constructor() { }

  ngOnInit(): void {
  }

}
