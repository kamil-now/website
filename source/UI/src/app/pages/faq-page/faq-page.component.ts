import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { CollapseCardComponent } from 'src/app/components/collapse-card/collapse-card.component';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements AfterViewInit {
  @ViewChildren(CollapseCardComponent) cards?: QueryList<CollapseCardComponent>;

  private opened?: CollapseCardComponent;

  ngAfterViewInit(): void {
    this.cards?.forEach(card => {
      card.opened.subscribe(() => {
        this.opened?.toggleCollapse();
        this.opened = card;
      });
    })
  }
}
