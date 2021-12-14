import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { AvailablePlansComponent } from './components/available-plans/available-plans.component';
import { EnterpriseTabComponent } from './components/enterprise-tab/enterprise-tab.component';
import { PersonalTabComponent } from './components/personal-tab/personal-tab.component';

const routes: Routes = [
  {
    path:'',
   component:AvailablePlansComponent
   
  },
  {path:'credit-card',
  component:CreditCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
