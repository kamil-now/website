import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        const scrollTo = params['section']
        if (scrollTo) {
          setTimeout(() => this.scrollToElement(scrollTo));
        }
      });
  }

  scrollToElement(targetId: string) {
    const element = document.getElementById(targetId);
    if (!element) {
      return;
    }
    const headerOffset = 75; // px to adjust for header so it does not cover section title
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
