import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FathymSharedModule, pioServiceSettings } from '@pio/common';
import { environment } from '../environments/environment';
import { PullitoffModule } from '@pull-it-off/pullitoff-common';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FathymSharedModule,
    PullitoffModule.forRoot()
  ],
  providers: [
    {
      provide: pioServiceSettings,
      useValue: FathymSharedModule.DefaultServiceSettings(environment)
    }
  ],
  exports: [PullitoffModule]
})
export class AppModule {}
