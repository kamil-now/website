import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.scss',
  imports: [
    RouterLink
  ]
})
export class TripCardComponent implements OnInit, OnDestroy {
  @Input()
  backgroundImageUrl!: string;
  @Input()
  title!: string;
  @Input()
  startOpen = false;

  isOpen: boolean = false;
  hideTimeoutId?: number;


  ngOnInit(): void {
    if (!this.backgroundImageUrl) {
      throw new Error('Background image url must be provided.')
    }
    if (!this.title) {
      throw new Error('Title must be provided.')
    }
    this.backgroundImageUrl = `url(${this.backgroundImageUrl})`;
    this.isOpen = this.startOpen;
  }

  ngOnDestroy(): void {
    if (this.hideTimeoutId) {
      window.clearTimeout(this.hideTimeoutId)
    }
  }

  open() {
    if (this.isOpen) {
      return;
    }
    this.isOpen = true;
    if (this.hideTimeoutId) {
      window.clearTimeout(this.hideTimeoutId)
    }
  }

  hideWithDelay() {
    this.hideTimeoutId = window.setTimeout(() => {
      this.isOpen = false;
      this.hideTimeoutId = undefined;
    }, 30000);
  }
}
