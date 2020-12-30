import { GenericModalService } from './services/generic-modal.service';
import { VideoService } from './services/video/video.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { PullItOffDirective } from './directives/pull-it-off.directive';
import { PullItOffService } from './services/pull-it-off.service';
import { EventsComponent } from './pages/events/events.component';
import { NavListComponent } from './controls/nav-list/nav-list.component';
import { NavigationComponent } from './controls/navigation/navigation.component';
import { SideNavComponent } from './controls/side-nav/side-nav.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HeaderComponent } from './controls/nav-mini/header/header.component';
import { MiniLeftMenuComponent } from './controls/nav-mini/mini-left-menu/mini-left-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiniSideNavService } from './services/mini-sidenav.service';
import { VideoPlayerComponent } from './controls/video-player/video-player.component';
import { VimeModule } from '@vime/angular';
import { TapSidesToSeekComponent } from './controls/video-player/tap-sides-to-seek/tap-sides-to-seek.component';
import { VideoListComponent } from './controls/video-list/video-list.component';

@NgModule({
  declarations: [
    PullItOffDirective,
    EventsComponent,
    NavListComponent,
    NavigationComponent,
    SideNavComponent,
    WelcomeComponent,
    SignUpComponent,
    HeaderComponent,
    MiniLeftMenuComponent,
    VideoPlayerComponent,
    TapSidesToSeekComponent,
    VideoListComponent
  ],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    VimeModule
  ],
  exports: [
    PullItOffDirective,
    EventsComponent,
    NavListComponent,
    NavigationComponent,
    SideNavComponent,
    WelcomeComponent,
    SignUpComponent,
    HeaderComponent,
    MiniLeftMenuComponent,
    VideoPlayerComponent,
    TapSidesToSeekComponent,
    VideoListComponent
  ],
  entryComponents: [
    EventsComponent,
    NavListComponent,
    NavigationComponent,
    SideNavComponent,
    WelcomeComponent,
    SignUpComponent,
    HeaderComponent,
    MiniLeftMenuComponent,
    VideoPlayerComponent,
    TapSidesToSeekComponent,
    VideoListComponent
  ]
})
export class PullItOffModule {
  static forRoot(environment: any): ModuleWithProviders<PullItOffModule> {
    return {
      ngModule: PullItOffModule,
      providers: [
        PullItOffService,
        MiniSideNavService,
        VideoService,
        GenericModalService,
        {
          provide: 'environmentConfig',
          useValue: environment
        }
      ]
    };
  }
}
