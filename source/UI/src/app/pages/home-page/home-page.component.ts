import { Component, OnInit } from '@angular/core';
import { isFirstVisit, registerFirstVisit } from '../../storage';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
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
