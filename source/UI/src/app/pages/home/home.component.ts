import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('navigation')
  navigation!: ElementRef<HTMLElement>;
  ngAfterViewInit(): void {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 100) {
        this.navigation.nativeElement.classList.add('shadow-bg');
      } else {
        this.navigation.nativeElement.classList.remove('shadow-bg');
      }
    })
  }

}
