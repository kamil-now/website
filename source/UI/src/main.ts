import { provideZoneChangeDetection } from "@angular/core";
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { FaqPageComponent } from './app/pages/faq-page/faq-page.component';
import { HomePageComponent } from './app/pages/home-page/home-page.component';
import { YachtComponent } from './app/pages/yacht-page/yacht-page.component';

bootstrapApplication(
  AppComponent,
  {
    providers: [
      provideZoneChangeDetection(),provideHttpClient(),
      provideRouter([
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'home', component: HomePageComponent },
        { path: 'faq', component: FaqPageComponent },
        { path: 'dufour460', component: YachtComponent },
      ])
    ]
  }
);