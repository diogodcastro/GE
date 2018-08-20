import { Injectable } from '@angular/core';
import { Equipment } from '../models/equipment.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as Constants from './../app-constants';
import { map } from 'rxjs/operators';
import { EquipmentModule } from '../../equipment/equipment.module';

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

  public getEquipmentByCodigo(codigo: string): Observable<Equipment> {
    return this.http.get<Equipment>(`${Constants.APP_URI}/${this.endpoint}/` + codigo).pipe(
      map((response: Equipment) => {
        return response;
      })
    );
  }

  public updateEquipment(equipment: Equipment): Observable<Equipment> {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');

    return this.http
      .put<Equipment>(`${Constants.APP_URI}/${this.endpoint}`, equipment, { headers: headers })
      .pipe(map((response: any) => response));
  }
}
