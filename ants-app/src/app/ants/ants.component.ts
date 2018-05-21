import { Component, OnInit } from '@angular/core';

import { Ant } from '../ant';
import { AntService  } from '../ant.service';

@Component({
  selector: 'app-ants',
  templateUrl: './ants.component.html',
  styleUrls: ['./ants.component.css']
})
export class AntsComponent implements OnInit {

  ants: Ant[];

  constructor(private antService : AntService) { }

  ngOnInit() {
    this.getAnts();
  }

  getAnts(): void {
    this.antService.getAnts()
        .subscribe(ants => this.ants = ants)
  }

}