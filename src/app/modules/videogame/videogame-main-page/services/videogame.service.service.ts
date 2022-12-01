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

  deleteVideogame(id: string) : Observable<unknown>{
    return this.http.delete(`http://localhost:5005/videojuegos/${id}`)
  }

  postVideogame(videogame: Videogame) : Observable<Videogame>{
    return this.http.post<Videogame>(`http://localhost:5005/videojuegos`, videogame)
  }
}
