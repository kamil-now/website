import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LogoComponent } from './components/logo/logo.component';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { DestinationCardComponent } from './components/destination-card/destination-card.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TripsComponent } from './components/trips/trips.component';
import { AboutTripComponent } from './components/about-trip/about-trip.component';
import { TeamComponent } from './components/team/team.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { CollapseCardComponent } from './components/collapse-card/collapse-card.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TripCardComponent } from './components/trip-card/trip-card.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LogoComponent,
    ImageCarouselComponent,
    DestinationCardComponent,
    DestinationsComponent,
    AboutUsComponent,
    TripsComponent,
    AboutTripComponent,
    TeamComponent,
    FaqPageComponent,
    CollapseCardComponent,
    NavigationComponent,
    PortfolioComponent,
    TripCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
