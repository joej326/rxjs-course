import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { concat } from 'rxjs/index';
import { concatMap, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-observable-concat',
  templateUrl: './observable-concat.component.html',
  styleUrls: ['./observable-concat.component.scss']
})
export class ObservableConcatComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // concat - note that this is NOT an operator!
    const myObs1$ = of('a', 'b', 'c');
    const myObs2$ = of('d', 'e', 'f');

    const result$ = concat(myObs1$, myObs2$);

    result$.subscribe((data) => console.log(data));


    // concatMap - note that this is an operator and concat above is not
    const obs1$ = of([1, 2, 3]);
    const obs2$ = of(4, 5, 6);

    obs1$.pipe(mergeMap(() => obs2$)).subscribe(console.log);
  }

}
