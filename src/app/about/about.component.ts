import { Component } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  first: number = 0;
  totalRecords: number = 15;

  constructor() {}

  onPageChange({ page, first, rows, pageCount }: Record<string, number>) {
    this.first = first;
  }



}
