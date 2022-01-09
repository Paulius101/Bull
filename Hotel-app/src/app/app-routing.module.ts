import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';

const routes: Routes = [
  {
    path: '',
    component:LandingPageComponent
  },
  {
    path: 'landing-page',
    component:LandingPageComponent
  },
  {
    path:'facilities',
    component: FacilitiesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
