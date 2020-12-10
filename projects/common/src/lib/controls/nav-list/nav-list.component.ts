import { Component, Input, OnInit } from '@angular/core';
import { animateText, onSideNavChange } from '../../animations/animations';
import { NavLinkModel } from '../../models/nav-link.model';
import { MiniSideNavService } from '../../services/mini-sidenav.service';

@Component({
  selector: 'pio-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
  animations: [onSideNavChange, animateText]
})
export class NavListComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('nav-links')
  public NavLinks: Array<NavLinkModel>;

  public linkText: boolean;
  public OnSideNavToggle: boolean;

  constructor(public SideNavService: MiniSideNavService) {

  }

  public ngOnInit(): void {
  }
}
