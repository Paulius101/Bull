import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  SignInComponent
} from './components/sign-in/sign-in.component';
import {
  SignUpComponent
} from './components/sign-up/sign-up.component';
import {
  ProfileComponent
} from './components/profile/profile.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [{
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path:'profile',
    component:ProfileComponent,
     canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
