import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Movement } from '../models/movement.model';

import * as Constants from './../app-constants';
import { map } from 'rxjs/operators';

@Injectable()
export class MovementService {
  private endpoint: string = 'movement';

  constructor(private http: HttpClient) {}

  public getMovements(): Observable<Movement[]> {
    return this.http.get<Movement[]>(`${Constants.APP_URI}/${this.endpoint}`).pipe(
      map((response: Movement[]) => {
        return response;
      })
    );
  }

  public saveMovement(movement: Movement): Observable<Movement> {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http
      .post<Movement>(`${Constants.APP_URI}/${this.endpoint}`, movement, { headers: headers })
      .pipe(map((response: any) => response));
  }




}
