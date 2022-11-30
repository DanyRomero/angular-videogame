import { Developer } from './developer.interface';

export interface Videogame{
  _id: string,
  nombre: string,
  descripción: string,
  desarrollador: Developer,
  año: number,
  imagen: string,
  consolas: string[],
}