import { Component, Input, OnInit } from '@angular/core';
import { Plate } from '../plate.model';

@Component({
  selector: 'app-plate-card',
  templateUrl: './plate-card.component.html',
  styleUrls: ['./plate-card.component.scss']
})
export class PlateCardComponent implements OnInit {

  @Input() plates: Array<Plate>;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

  sold(soldOrNot: string) {
    if (soldOrNot === 'Yes') {
      return 'Yes'
    } else {
      return 'No'
    }
  }

}
