import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { Consolee } from 'src/app/core/interfaces/console.interface';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private userId: string = '';

  constructor(private http: HttpClient) {}

  login(consola: Consolee): Observable<Consolee> {
    return this.http.post<Consolee>(
      `localhost:12721/api/consolas/create`,
      consola
    );
  }

  setUserId(userId: string) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }
}
