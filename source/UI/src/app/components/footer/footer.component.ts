import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit {
  @ViewChild('footer') footer?: ElementRef<HTMLElement>
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(() => {
      const isOverflowing = document.body.scrollWidth > document.body.clientWidth;

      if (!isOverflowing) {
        this.footer?.nativeElement.classList.add('show');
      } else {
        this.footer?.nativeElement.classList.remove('show');
      }
    });
  }

  ngAfterViewInit(): void {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 100) {
        this.footer?.nativeElement.classList.add('show');
      } else {
        this.footer?.nativeElement.classList.remove('show');
      }
    });
  }
}
