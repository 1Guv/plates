import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { filter, flatMap, map, publishReplay, refCount, startWith, take, takeWhile } from 'rxjs/operators';
import { DataService } from './data.service';
import { Plate } from './plate.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ap-numberplate-search';
  numberPlates$: Observable<Array<Plate>>;
  soldPlates$: Observable<Array<Plate>>;
  mostExpensivePlates$: Observable<Array<Plate>>;
  mostViewedPlates: Observable<Array<Plate>>;
  top10OldestPlates: Observable<Array<Plate>>;
  top10LatestPlates: Observable<Array<Plate>>;
  allNumberPlatesNotSold$: Observable<Array<Plate>>;
  latestPlates$: Observable<Array<Plate>>;

  constructor(private dataService: DataService) {
    this.getPlatesFromAPI();
  }

  getPlatesFromAPI() {

    const data$ = this.dataService.getPlates()
    .pipe(
      publishReplay(1), // publishReplay(1, _time_)
      refCount(),
      take(1),
    );

    const plates$ = data$
      .pipe(
        map(data => Object.values(data)),
      );

    this.numberPlates$ = plates$
      .pipe(
        map(plates => plates.slice(0, 100))
      );

    this.soldPlates$ = plates$
      .pipe(
        map(plates => plates
            .filter(plate => plate.sold === 'Yes'))
      );

    this.mostExpensivePlates$ = plates$
      .pipe(
        map(plates => {
          return plates.sort((a,b) => (a.asking_price > b.asking_price) ? -1 : 1).slice(0,10)
        })
      )

    // Need to use dates to work out which is the latest
    this.latestPlates$ = plates$
      .pipe(
        map(plates => {
          // return plates.sort((a, b) => (a.id > b.id) ? -1 : 1).slice(0, 250);
          // return plates.sort((a, b) => (a.id > b.id) ? -1 : 1);
          return plates.sort((a, b) => new Date(b.created_date).getTime() - new Date(a.created_date).getTime()).slice(0, 100);
          // return plates.sort((a, b) => new Date(b.created_date).getTime() - new Date(a.created_date).getTime());
        })
      );
  }

}
