import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
  imports: [
    RouterLink,
    NgClass
  ]
})
export class LogoComponent {
  @Input() isLink = false;
  @Input() size: 'large' | 'regular' = 'regular';
}
