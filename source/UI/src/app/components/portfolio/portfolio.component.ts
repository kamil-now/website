import { Component } from '@angular/core';
import { ImageCarouselComponent } from '../image-carousel/image-carousel.component';

@Component({
  standalone: true,
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  imports: [
    ImageCarouselComponent
  ]
})
export class PortfolioComponent {

}
