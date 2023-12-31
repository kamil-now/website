import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-collapse-card',
  templateUrl: './collapse-card.component.html',
  styleUrl: './collapse-card.component.scss',
})
export class CollapseCardComponent {

  @Input() title: string = 'Card Title';
  @Output() opened = new EventEmitter<void>();

  isCollapsed: boolean = true;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    if(!this.isCollapsed){
      this.opened.emit();
    }
  }
}
