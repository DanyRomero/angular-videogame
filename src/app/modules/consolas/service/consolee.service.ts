import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { Consolee } from 'src/app/core/interfaces/console.interface';

@Injectable({
  providedIn: 'root',
})
export class ConsoleeService {
  private consolee: Consolee = [];
  private userId: string = '';

  constructor(private http: HttpClient) {}

  getConsoles(id: string = ''): Observable<Consolee[]> {
    let params = new HttpParams();
    params.set('page', 1); // ?page=1
    if (id) {
      params.set('id', id); // &id=1
    }
    return this.http.get<Consolee[]>(`localhost:12721/api/consolas/list`, {
      params,
    });
  }

  createConsoles(consola: Consolee): Observable<Consolee> {
    return this.http.post<Consolee>(
      `localhost:12721/api/consolas/create`,
      consola
    );
  }

  getInterval(): Observable<number> {
    return interval(1000);
  }

  setUserId(userId: string) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }
}
