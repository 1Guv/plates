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

  muslimRegex = /MUSLIM/g;
  sikhRegex = /SIKH/g;
  hinduRegex = /HINDU/g;
  britishRegex = /BRITISH/g;
  category: string;
  imageUrl: string;

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

  findCategory(plateUrl: string) {
    if (plateUrl.match(this.muslimRegex)) {
      this.category = 'MUSLIM';
      this.imageUrl = '/assets/flags/flag_of_pakistan.svg';
    };

    if (plateUrl.match(this.sikhRegex)) {
      this.category = 'SIKH';
      this.imageUrl = '/assets/flags/khanda.svg';
    };

    if (plateUrl.match(this.britishRegex)) {
      this.category = 'BRITISH';
      this.imageUrl = '';
    };

    if (plateUrl.match(this.hinduRegex)) {
      this.category = 'HINDU';
      this.imageUrl = '/assets/flags/india.svg';
    };
    return this.imageUrl;
  }

}
