import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { mergeMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit, AfterViewInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('jobInput') jobInput: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const nameInputVal = this.nameInput.nativeElement;
    const jobInputVal = this.jobInput.nativeElement;

    const nameObs = fromEvent(nameInputVal, 'input');
    const jobObs = fromEvent(jobInputVal, 'input');

    nameObs.pipe(mergeMap(
      (nameEvent) => {
        return jobObs.pipe(map((jobEvent) => {
          console.log(jobEvent['target'].value);
          return `${nameEvent['target'].value}: ${jobEvent['target'].value}`;
        }));
      }
    )).subscribe(
      (data) => console.log(data)
    );




  }

}
