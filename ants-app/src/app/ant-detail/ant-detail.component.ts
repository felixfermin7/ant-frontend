import { Component, OnInit, Input } from '@angular/core';
import { Ant } from '../ant';

@Component({
  selector: 'app-ant-detail',
  templateUrl: './ant-detail.component.html',
  styleUrls: ['./ant-detail.component.css']
})
export class AntDetailComponent implements OnInit {

  @Input() ant: Ant;

  constructor() { }

  ngOnInit() {
  }

}
