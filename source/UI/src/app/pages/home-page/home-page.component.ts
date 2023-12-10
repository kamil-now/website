import { Component, OnInit } from '@angular/core';
import { isFirstVisit, registerFirstVisit } from '../../storage';
import { PortfolioComponent } from 'src/app/components/portfolio/portfolio.component';
import { AboutTripComponent } from 'src/app/components/about-trip/about-trip.component';
import { LogoComponent } from 'src/app/components/logo/logo.component';
import { TripCardComponent } from 'src/app/components/trip-card/trip-card.component';
@Component({
  standalone: true,
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [
    LogoComponent,
    TripCardComponent,
    PortfolioComponent,
    AboutTripComponent,
  ]
})
export class HomePageComponent implements OnInit {

  isFirstVisit = true;

  ngOnInit() {
    this.isFirstVisit = isFirstVisit()
    if (this.isFirstVisit) {
      registerFirstVisit();
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
