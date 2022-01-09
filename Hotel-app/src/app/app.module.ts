import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpeningEffectComponent } from './components/opening-effect/opening-effect.component';
import { HeaderComponent } from './components/header/header.component';
import { RoomComponent } from './components/room/room.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FacilitiesComponent } from './components/facilities/facilities.component';


@NgModule({
  declarations: [
    AppComponent,
    OpeningEffectComponent,
    HeaderComponent,
    RoomComponent,
    LandingPageComponent,
    FooterComponent,
    FacilitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
