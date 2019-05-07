import { Component, OnInit, AfterContentInit } from '@angular/core';

import { of } from 'rxjs/internal/observable/of';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    of(1, 2, 3, 4).pipe(map((val) => val * 10), map((val) => val * 10)).subscribe(
      (data) => console.log(data)
    );
  }

}
