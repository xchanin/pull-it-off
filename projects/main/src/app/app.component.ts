import { Component, OnInit } from '@angular/core';
import { NavLinkModel, ParseRouteUtil, PullItOffUtils } from '@pull-it-off/pullitoff-common';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ThemeColorPickerService } from '@lcu/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public ThemeClass: BehaviorSubject<string>;
  public Themes: Array<any>;
  public Title = 'pio-Starter-App';

  public Links: Array<NavLinkModel>;

  constructor(
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected themeService: ThemeColorPickerService
  ) { }

  public ngOnInit(): void {
    this.Title = PullItOffUtils.upperPullItOff(this.Title);
    // this.resetTheme();
    // this.setThemes();
  }

  public OnActivate(evt: Event): void {
    this.routeChanged();
  }

  protected routeChanged(): void {

    const root: string = ParseRouteUtil.parse(this.router.url);

    switch (root.toUpperCase()) {
      // case 'HOME':
      //   this.BackgroundImage = './assets/images/bg_image.jpg';
      //   break;
      // case 'USER':
      //   this.BackgroundImage = './assets/images/bg-01.jpg';
      //   break;
      // case 'TUTORIALS':
      //   this.BackgroundImage = './assets/images/bg-02.jpg';
      //   this.tutorialsService.GetTutorials().subscribe((data: Array<TutorialModel>) => {
      //     this.sharedNotificationService.UpdateTutorialData(data);
      //   });
      //   break;
      // case 'REACTIVEFORM':
      //   this.BackgroundImage = './assets/images/bg-03.jpg';
      //   break;
      // case 'FXLAYOUT':
      //   this.BackgroundImage = './assets/images/bg-04.jpg';
      //   break;
      //   default:
      //   this.BackgroundImage = './assets/images/bg_image.jpg';
    }
  }
  // protected resetTheme(): void {
  //   this.ThemeClass = this.themeService.GetColorClass();
  // }

  // public PickTheme(color: string): void {
  //   this.themeService.SetColorClass(`fathym-${color}-theme`);
  // }

  // protected setThemes(): void {
  //   this.Themes = [
  //     { ColorSwatch: 'color-swatch-arctic', Icon: 'brightness_1', Label: 'Arctic Theme', Value: 'arctic-theme', Color: 'arctic' },
  //     { ColorSwatch: 'color-swatch-contrast', Icon: 'brightness_1', Label: 'Contrast Theme', Value: 'contrast-theme', Color: 'contrast' },
  //     { ColorSwatch: 'color-swatch-cool-candy', Icon: 'brightness_1', Label: 'Cool Candy Theme', Value: 'cool-candy-theme', Color: 'cool-candy' },
  //     { ColorSwatch: 'color-swatch-flipper', Icon: 'brightness_1', Label: 'Flipper Theme', Value: 'flipper-theme', Color: 'flipper' },
  //     { ColorSwatch: 'color-swatch-ice', Icon: 'brightness_1', Label: 'Ice Theme', Value: 'ice-theme', Color: 'ice' },
  //     { ColorSwatch: 'color-swatch-sea-green', Icon: 'brightness_1', Label: 'Sea Green Theme', Value: 'sea-green-theme', Color: 'sea-green' },
  //     { ColorSwatch: 'color-swatch-white-mint', Icon: 'brightness_1', Label: 'White Mint Theme', Value: 'white-mint-theme', Color: 'white-mint' },
  //     { ColorSwatch: 'color-swatch-ivy', Icon: 'brightness_1', Label: 'Ivy Theme', Value: 'ivy-theme', Color: 'ivy' }
  //   ];
  // }

  public DisplayDetails(): void {
    console.log('DisplayDetails()');
  }
}
