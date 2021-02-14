import { Component, OnInit } from '@angular/core';
import { map, publishReplay, refCount, take } from 'rxjs/operators';
import { DataService } from '../data.service';
import { Plate } from '../plate.model';

@Component({
  selector: 'app-plate-listing',
  templateUrl: './plate-listing.component.html',
  styleUrls: ['./plate-listing.component.scss']
})
export class PlateListingComponent implements OnInit {
  latestPlates$: Array<Plate>;
  loaded = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getPlatesFromAPI();
  }

  getPlatesFromAPI() {
    const data$ = this.dataService.getPlates()
    .pipe(
      publishReplay(1), // publishReplay(1, _time_)
      refCount(),
      take(1),
    );

    const plates$ = data$.pipe(
      map(data => Object.values(data)),
    );

     // Need to use dates to work out which is the latest
    plates$
    .pipe(take(1))
    .subscribe(data => {
      this.latestPlates$ = data.sort((a, b) => new Date(b.created_date).getTime() - new Date(a.created_date).getTime()).slice(0, 100);
      this.loaded = true;
    });
  }

}
