import { Component, OnInit, AfterContentInit } from '@angular/core';

import { of } from 'rxjs/internal/observable/of';
import { map, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterContentInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // shareReplay() makes it so even though there are multiple listeners to this observable,
    // only one http request is made. (the "network" tab reveals how many are being made.)
    const apiRequest = this.http.get('https://swapi.co/api/people/1/').pipe(shareReplay());

    apiRequest.subscribe();
    apiRequest.subscribe();
    apiRequest.subscribe();


    

    of(1, 2, 3, 4).pipe(map((val) => val * 10), map((val) => val * 10)).subscribe(
      (data) => console.log(data)
    );
  }

}
