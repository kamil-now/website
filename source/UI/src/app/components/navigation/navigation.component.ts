import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isFirstVisit } from '../../storage';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit, AfterViewInit {

  @ViewChild('navigation')
  navigation!: ElementRef<HTMLElement>;

  get currentRoute(): string {
    return `/${this.route.routeConfig?.path}`;
  }

  isOpen = false;
  isFirstVisit = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(() => this.isOpen = false);
    this.isFirstVisit = isFirstVisit();
  }

  ngAfterViewInit(): void {
    if (this.isOpen) {
      this.navigation.nativeElement.classList.add('navigation-shadow-bg');
    }
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 100) {
        this.navigation.nativeElement.classList.add('navigation-shadow-bg');
      } else {
        this.navigation.nativeElement.classList.remove('navigation-shadow-bg');
      }
    });
  }

  toggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.navigation.nativeElement.classList.add('navigation-shadow-bg');
    }
  }
}
