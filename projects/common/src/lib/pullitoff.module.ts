import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { PullItOffService } from './services/pull-it-off.service';
import { PullItOffComponent } from './controls/pull-it-off/pull-it-off.component';
import { PullItOffDirective } from './directives/pull-it-off.directive';
import { WelcomeComponent } from './controls/welcome/welcome.component';

@NgModule({
  declarations: [PullItOffComponent, PullItOffDirective, WelcomeComponent],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [PullItOffComponent, PullItOffDirective, WelcomeComponent],
  entryComponents: [WelcomeComponent]
})
export class PullitoffModule {
  static forRoot(): ModuleWithProviders<PullitoffModule> {
    return {
      ngModule: PullitoffModule,
      providers: [PullItOffService]
    };
  }
}
