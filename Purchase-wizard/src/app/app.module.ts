import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { OrderPreviewComponent } from './components/order-preview/order-preview.component';
import { PersonalTabComponent } from './components/personal-tab/personal-tab.component';
import { EnterpriseTabComponent } from './components/enterprise-tab/enterprise-tab.component';
import { PlanCardComponent } from './components/plan-card/plan-card.component';
import { AvailablePlansComponent } from './components/available-plans/available-plans.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardComponent,
    OrderPreviewComponent,
    PersonalTabComponent,
    EnterpriseTabComponent,
    PlanCardComponent,
    AvailablePlansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
