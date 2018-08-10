import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import * as Constants from './../app-constants';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  private endpoint: string = 'users';

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`${Constants.APP_URI}/${this.endpoint}`)
      .pipe(map((response: User[]) => {
        return response;
      }));
  }
}
