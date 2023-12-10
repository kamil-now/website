import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from "@angular/router";
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    FooterComponent,
    NavigationComponent,
    RouterOutlet
  ],
})
export class AppComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        setTimeout(() => {
          const scrollTo = params['section']
          if (scrollTo) {
            this.scrollToElement(scrollTo)
          } else {
            this.scrollToTop();
          }
        });
      });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  scrollToElement(targetId: string) {
    const element = document.getElementById(targetId);
    if (!element) {
      return;
    }
    const headerOffset = 72; // px to adjust for header so it does not cover section title
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

