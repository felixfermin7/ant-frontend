import { Component, OnInit } from '@angular/core';
import { Ant } from '../ant';
import { AntService } from '../ant.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  ants: Ant[] = [];

  constructor(private antService: AntService) { }

  ngOnInit() {
    this.getAnts();
  }

  getAnts(): void {
    this.antService.getAnts()
        .subscribe(ants => this.ants = ants.slice(1, 5));
  }
}