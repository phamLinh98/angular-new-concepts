import { CdkAccordionModule } from '@angular/cdk/accordion';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CdkAccordionModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
}
