import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { filter, flatMap, map, startWith, take, takeWhile } from 'rxjs/operators';
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

  constructor(private dataService: DataService) {
    this.getPlatesFromAPI();
  }

  getPlatesFromAPI() {

    const data$ = this.dataService.getPlates();

    const plates$ = data$
      .pipe(
        map(data => Object.values(data)),
      );

    this.numberPlates$ = plates$
      .pipe(
        map(plates => plates.slice(0,5))
      )

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
  }

}
