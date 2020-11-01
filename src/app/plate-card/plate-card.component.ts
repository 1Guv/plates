import { Component, Input, OnInit } from '@angular/core';
import { Plate } from '../plate.model';

@Component({
  selector: 'app-plate-card',
  template: `
    <h1>{{title}}</h1>
    <h6 *ngIf="plates">{{plates.length}}</h6>

    <ul *ngFor="let plate of plates">
      <mat-card class="mat-elevation-z8">
        <li>ID: {{plate.id}}</li>
        <li>Plate: {{plate.plate_id}}</li>
        <li>Asking price: {{plate.asking_price}}</li>
        <li><img src="https://www.apnaplates.com/plates/smallimg/{{plate.small_image}}"></li>
        <li>Page views: {{plate.page_views}}</li>
        <li>Email to friend: {{plate.emailtofriendcount}}</li>
        <li>Seller contacted: {{plate.sellercontacted}}</li>
        <li>Created date: {{plate.created_date}}</li>
        <li>Date created: {{plate.date_created}}</li>
        <li>Status: {{plate.status}}</li>
        <li>Sold: {{plate.sold}}</li>
        <li>Meaning: {{plate.meaning}}</li>
        <li>Label: {{plate.label}}</li>
        <li>Url: <a href="{{plate.url}}" target="_blank">{{plate.url}}</a></li>
      </mat-card>
    </ul>
  `,
  styleUrls: ['./plate-card.component.scss']
})
export class PlateCardComponent implements OnInit {

  @Input() plates: Array<Plate>;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
