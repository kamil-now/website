import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-trip-card',
    templateUrl: './trip-card.component.html',
    styleUrl: './trip-card.component.scss',
    imports: [
        RouterLink
    ]
})
export class TripCardComponent implements OnInit, OnDestroy {

  @Input() title: string = '';
  @Input() flagImgSrc: string = '';
  @Input() marina: string = '';
  @Input() yacht: string = '';
  @Input() captain: string = '';
  @Input() priceEUR: number = -1;
  @Input() pricePLN: number = -1;
  @Input() phoneNumber: string = '';
  @Input() dates: string[] = [];
  @Input() startOpen = false;

  isOpen: boolean = false;
  hideTimeoutId?: number;


  ngOnInit(): void {
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
