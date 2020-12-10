import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeColorPickerService } from '@lcu/common';
import {
  PullItOffUtils,
  NavLinkModel,
  NavigationConstants,
  onMainContentChange,
  MiniSideNavService
} from '@pio/pull-it-off-common';

@Component({
  selector: 'pio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [onMainContentChange]
})
export class AppComponent implements OnInit {
  public onSideNavChange: boolean;
  public Title = 'pio-Starter-App';
  public Links: Array<NavLinkModel>;

  constructor(
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected themeService: ThemeColorPickerService,
    protected miniSideNavService: MiniSideNavService
  ) {

    this.Links = NavigationConstants.MENU_ITEMS;

    this.miniSideNavService.SideNavToggleChanged.subscribe((res: boolean) => {
      this.onSideNavChange = res;
    });
   }

  public ngOnInit(): void {
    this.Title = PullItOffUtils.upperPullItOff(this.Title);
  }

  public OnActivate(evt: Event): void {

  }

  public DisplayDetails(): void {
    console.log('DisplayDetails()');
  }
}
