import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';


import { Ant } from './ant';
import { ANTS } from './mock-ants';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AntService {

  getAnts(): Observable<Ant[]> {
    // TODO: send the message _after_ fetching the ants
    this.messageService.add('AntService: fetched ants')
    return of(ANTS);
  }

  constructor(private messageService: MessageService) { }
}
