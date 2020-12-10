import { Component, Input, OnInit } from '@angular/core';
import { onSideNavChange, animateText } from '../../../animations/animations';
import { NavLinkModel } from '../../../models/nav-link.model';
import { MiniSideNavService } from '../../../services/mini-sidenav.service';

interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'pio-mini-left-menu',
  templateUrl: './mini-left-menu.component.html',
  styleUrls: ['./mini-left-menu.component.scss'],
  animations: [onSideNavChange, animateText]
})

export class MiniLeftMenuComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('nav-links')
  public NavLinks: Array<NavLinkModel>;

  constructor(public SideNavService: MiniSideNavService) {}

  public ngOnInit(): void {
  }

  public ToggleSideNav(): void {
    this.SideNavService.SideNavToggle();
  }

}
