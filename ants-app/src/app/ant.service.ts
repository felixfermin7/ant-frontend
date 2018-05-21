import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';


import { Ant } from './ant';
import { ANTS } from './mock-ants';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AntService {

 // private antsUrl = 'http://localhost:4000/ants/'
 private antsUrl = 'api/ants'

  constructor(
      private http: HttpClient,
      private messageService: MessageService) { }

  getAnts (): Observable<Ant[]> {
    console.log(this.antsUrl)
    return this.http.get<Ant[]>(this.antsUrl)
        .pipe(
            tap(ants => this.log(`fetched ants`)),
            catchError(this.handleError('getHeroes', []))
        );

  }

  /** GET ant by id. Will 404 if id not found */
  getAnt(id: number): Observable<Ant> {
    const url = `${this.antsUrl}/${id}`;
    return this.http.get<Ant>(url).pipe(
        tap(_ => this.log(`fetched ant id=${id}`)),
        catchError(this.handleError<Ant>(`getAnt id=${id}`))
    );
  }

  /** PUT: update the ant on the server */
  updateAnt (ant: Ant): Observable<any> {
    return this.http.put(this.antsUrl, ant, httpOptions).pipe(
        tap(_ => this.log(`updated hero id=${ant.id}`)),
        catchError(this.handleError<any>('updateAnt'))
    );
  }

  /** POST: add a new ant to the server */
  addAnt (ant: Ant): Observable<Ant> {
    return this.http.post<Ant>(this.antsUrl, ant, httpOptions).pipe(
        tap((ants: Ant) => this.log(`added ant w/ id=${ant.id}`)),
        catchError(this.handleError<Ant>('addAnt'))
    );
  }

  /** DELETE: delete the ant from the server */
  deleteAnt (ant: Ant | number): Observable<Ant> {
    const id = typeof ant === 'number' ? ant : ant.id;
    const url = `${this.antsUrl}/${id}`;

    return this.http.delete<Ant>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted ant id=${id}`)),
        catchError(this.handleError<Ant>('deleteAnt'))
    );
  }

  /* GET ants whose name contains search term */
  searchAnts(term: string): Observable<Ant[]> {
    if (!term.trim()) {
      // if not search term, return empty ant array.
      return of([]);
    }
    return this.http.get<Ant[]>(`${this.antsUrl}/?name=${term}`).pipe(
        tap(_ => this.log(`found ants matching "${term}"`)),
        catchError(this.handleError<Ant[]>('searchAnts', []))
    );
  }

  private log(message: string) {
    this.messageService.add('AntService: ' + message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
