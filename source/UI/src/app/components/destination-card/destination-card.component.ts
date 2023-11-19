import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination-card',
  templateUrl: './destination-card.component.html',
  styleUrls: ['./destination-card.component.scss']
})
export class DestinationCardComponent implements OnInit {
  @Input()
  backgroundImageUrl!: string;
  @Input()
  title!: string;
  @Input()
  description?: string;

  ngOnInit(): void {
    if(!this.backgroundImageUrl){
      throw new Error('Background image url must be provided.')
    }
    if(!this.title){
      throw new Error('Title must be provided.')
    }
    this.backgroundImageUrl = `url(${this.backgroundImageUrl})`;
  }
}
