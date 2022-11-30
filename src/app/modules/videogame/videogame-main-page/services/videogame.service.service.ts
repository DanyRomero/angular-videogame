import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Videogame } from 'src/app/core/interfaces/videogame.interface';

@Injectable({
  providedIn: 'root'
})
export class VideogameServiceService {

  constructor(private http: HttpClient) { }

  fetchVideogames(): Observable<Videogame[]>{
    return this.http.get<Videogame[]>('http://localhost:5005/videojuegos')

  }

  fetchOneVideogame(id: string): Observable<Videogame>{
    return this.http.get<Videogame>(`http://localhost:5005/videojuegos/${id}`)
  }
}
