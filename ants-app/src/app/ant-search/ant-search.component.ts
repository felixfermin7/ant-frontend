import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Ant } from '../ant';
import { AntService } from '../ant.service';

@Component({
  selector: 'app-ant-search',
  templateUrl: './ant-search.component.html',
  styleUrls: [ './ant-search.component.css' ]
})
export class AntSearchComponent implements OnInit {
  ants$: Observable<Ant[]>;
  private searchTerms = new Subject<string>();

  constructor(private antService: AntService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.ants$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),

        // ignore new term if same as previous term
        distinctUntilChanged(),

        // switch to new search observable each time the term changes
        switchMap((term: string) => this.antService.searchAnts(term)),
    );
  }
}