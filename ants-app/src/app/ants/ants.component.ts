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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.antService.addAnt({ name } as Ant)
        .subscribe(hero => {
          this.ants.push(hero);
        });
  }
  delete(ant: Ant): void {
    this.ants = this.ants.filter(a => a !== ant);
    this.antService.deleteAnt(ant).subscribe();
  }

}