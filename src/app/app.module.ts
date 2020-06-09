import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InfoPageComponent } from './page/info-page/info-page.component';
import { AccountPageComponent } from './page/account-page/account-page.component';
import { TrainingsPageComponent } from './page/trainings-page/trainings-page.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FeaturesComponent } from './features/features.component';
import { SignInComponent } from './page/sign-in/sign-in.component';

const appRoutes: Routes = [
  {path: '', component: InfoPageComponent},
  {path: 'account', component: AccountPageComponent},
  {path: 'trainings', component: TrainingsPageComponent},
  {path: 'signin', component: SignInComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoPageComponent,
    AccountPageComponent,
    TrainingsPageComponent,
    FooterComponent,
    CarouselComponent,
    FeaturesComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
