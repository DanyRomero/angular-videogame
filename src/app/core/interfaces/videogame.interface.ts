import { Developer } from './developer.interface';
import { Consolee } from './console.interface';

export interface Videogame {
  _id: string;
  nombre: string;
  descripcion: string;
  desarrollador?: Developer;
  año?: number;
  imagen?: string;
  consolas?: Consolee[];
  activo?: string;
}

export type VideogameFormValues = Omit<Videogame, '_id'>;

export interface filterVideogame {
  nombre: string;
  desarrollador: string;
}