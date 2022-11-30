import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Developer, TopDeveloper } from '../../../core/interfaces/developer.interface';

@Injectable({
  providedIn: 'root',
})
export class DeveloperService {
  private developers: Developer[] = [];

  constructor(private http: HttpClient) {}

  fetchDevelopers(): Observable<Developer[]>{
    return this.http.get<Developer[]>("http://localhost:5005/desarrolladores")
  }

  postDeveloper(developer: Developer): Observable<Developer>{
    return this.http.post<Developer>(`http://localhost:5005/desarrolladores`, developer)
  }

  fetchTopDevelopers(): Observable<TopDeveloper[]>{
    return this.http.get<TopDeveloper[]>('http://localhost:5005/desarrolladores/top')
  }

  deleteDeveloper(id: string): Observable<unknown>{
    return this.http.delete(`http://localhost:5005/desarrolladores/${id}`)
  }
  
}
