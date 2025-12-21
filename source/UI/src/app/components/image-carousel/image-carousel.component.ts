
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-image-carousel',
    templateUrl: './image-carousel.component.html',
    styleUrl: './image-carousel.component.scss',
    imports: []
})
export class ImageCarouselComponent implements OnInit, OnDestroy {
  @Input() fit: 'cover' | 'contain' = 'cover';

  images: string[] = [
    './assets/img/gallery/1.jpg',
    './assets/img/gallery/2.jpg',
    './assets/img/gallery/3.jpg',
  ];

  currentIndex: number = 0;
  isFullScreen: boolean = false;

  private autoPlayInterval?: number
  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }
  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev(): void {
    this.currentIndex =
      this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }

  toggleFullScreen(): void {
    this.isFullScreen = !this.isFullScreen;
    if (this.isFullScreen) {
      this.stopAutoPlay();
    } else {
      this.startAutoPlay();
    }
  }

  private startAutoPlay(): void {
    this.autoPlayInterval = window.setInterval(() => {
      this.next();
    }, 3000);
  }

  private stopAutoPlay(): void {
    clearInterval(this.autoPlayInterval);
  }
}
