import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EquipmentsInfo } from '../models/equipmentsInfo.model';
import { Observable } from 'rxjs/Observable';
import * as Constants from './../app-constants';
import { map } from 'rxjs/operators';

@Injectable()
export class EquipmentsInfoService {
  private endpoint: string = 'equipmentsInfo';

  constructor(private http: HttpClient) { }

  public getEquipmentsInfo(): Observable<EquipmentsInfo[]> {
    return this.http.get<EquipmentsInfo[]>(`${Constants.APP_URI}/${this.endpoint}`).pipe(
      map((response: EquipmentsInfo[]) => {
        return response;
      })
    );
  }

  public getEquipmentInfoByEquipment(equipmento: string): Observable<EquipmentsInfo> {
    return this.http.get<EquipmentsInfo>(`${Constants.APP_URI}/${this.endpoint}/` + equipmento).pipe(
      map((response: EquipmentsInfo) => {
        return response;
      })
    );
  }

  public updateEquipment(equipment: EquipmentsInfo): Observable<EquipmentsInfo> {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');

    return this.http
      .put<EquipmentsInfo>(`${Constants.APP_URI}/${this.endpoint}`, equipment, { headers: headers })
      .pipe(map((response: any) => response));
  }

}
