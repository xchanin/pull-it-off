import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './controls/home/home.component';
import { SignUpComponent } from '@pio/pull-it-off-common';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
