import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VimeModule } from '@vime/angular';
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
import { VideoService } from './services/video/video.service';
import { MiniSideNavService } from './services/mini-sidenav.service';
import { VideoPlayerComponent } from './controls/video-player/video-player.component';
import { TapSidesToSeekComponent } from './controls/video-player/tap-sides-to-seek/tap-sides-to-seek.component';
import { VideoListComponent } from './controls/video-list/video-list.component';
import { GenericModalService } from './services/generic-modal.service';
import { AnimatedCardComponent } from './controls/animated-card/animated-card.component';
import { MouseMoveDirective } from './directives/mouse-move.directive';

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
    VideoListComponent,
    AnimatedCardComponent,
    MouseMoveDirective
  ],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    // VimeModule
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
    VideoListComponent,
    AnimatedCardComponent,
    MouseMoveDirective
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
    VideoListComponent,
    AnimatedCardComponent
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
