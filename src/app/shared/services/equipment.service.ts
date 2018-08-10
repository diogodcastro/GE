import { Injectable } from '@angular/core';
import { Equipment } from '../models/equipment.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as Constants from './../app-constants';
import { map } from 'rxjs/operators';

@Injectable()
export class EquipmentService {
  private endpoint: string = 'equipment';

  constructor(private http: HttpClient) {}

  public getEquipments(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(`${Constants.APP_URI}/${this.endpoint}`).pipe(
      map((response: Equipment[]) => {
        return response;
      })
    );
  }

}
