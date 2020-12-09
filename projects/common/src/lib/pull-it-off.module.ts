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

@NgModule({
  declarations: [
    PullItOffDirective,
    EventsComponent,
    NavListComponent,
    NavigationComponent,
    SideNavComponent,
    WelcomeComponent,
    SignUpComponent
  ],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    PullItOffDirective,
    EventsComponent,
    NavListComponent,
    NavigationComponent,
    SideNavComponent,
    WelcomeComponent,
    SignUpComponent
  ],
  entryComponents: [
    EventsComponent,
    NavListComponent,
    NavigationComponent,
    SideNavComponent,
    WelcomeComponent,
    SignUpComponent
  ]
})
export class PullItOffModule {
  static forRoot(): ModuleWithProviders<PullItOffModule> {
    return {
      ngModule: PullItOffModule,
      providers: [PullItOffService]
    };
  }
}
