import { SignUpComponent } from './controls/sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './controls/home/home.component';

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
