import { Component, OnInit, Input } from '@angular/core';
import { Ant } from '../ant';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AntService }  from '../ant.service';

@Component({
  selector: 'app-ant-detail',
  templateUrl: './ant-detail.component.html',
  styleUrls: ['./ant-detail.component.css']
})
export class AntDetailComponent implements OnInit {

  @Input() ant: Ant;

  constructor(
      private route: ActivatedRoute,
      private antService: AntService,
      private location: Location
  ) {}

  ngOnInit(): void {
    this.getAnt();
  }

  getAnt(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.antService.getAnt(id)
        .subscribe(ant => this.ant = ant);
  }

  goBack(): void {
    this.location.back();
  }

}
