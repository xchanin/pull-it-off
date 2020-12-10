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

  public onSideNavChange: boolean;
  public sideNavState: boolean = false;
  public linkText: boolean = false;

// tslint:disable-next-line:no-input-rename
@Input('nav-links')
public NavLinks: Array<NavLinkModel>;

  public pages: Page[] = [
    {name: 'Inbox', link:'some-link', icon: 'inbox'},
    {name: 'Starred', link:'some-link', icon: 'star'},
    {name: 'Send email', link:'some-link', icon: 'send'},
  ]

  constructor(protected miniSideNavService: MiniSideNavService) {
    // this.miniSideNavService.SideNavToggleChanged.subscribe((res: boolean) => {
    //   this.onSideNavChange = res;
    // });
   }

  ngOnInit() {
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this.miniSideNavService.SideNavToggleChanged.next(this.sideNavState);
  }

}
