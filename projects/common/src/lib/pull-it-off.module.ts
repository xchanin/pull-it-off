import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { VideoService } from './services/video/video.service';
import { MiniSideNavService } from './services/mini-sidenav.service';
import { VideoPlayerComponent } from './controls/video-player/video-player.component';
import { TapSidesToSeekComponent } from './controls/video-player/tap-sides-to-seek/tap-sides-to-seek.component';
import { VideoListComponent } from './controls/video-list/video-list.component';
import { GenericModalService } from './services/generic-modal.service';
import { AnimatedCardComponent } from './controls/animated-card/animated-card.component';
import { MouseMoveDirective } from './directives/mouse-move.directive';
import { DynamicGridComponent } from './controls/dynamic-grid/dynamic-grid.component';

// import {MatIconModule, MatIconRegistry} from '@angular/material/icon';

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
    MouseMoveDirective,
    DynamicGridComponent
  ],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule
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
    MouseMoveDirective,
    DynamicGridComponent
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
    AnimatedCardComponent,
    DynamicGridComponent
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
