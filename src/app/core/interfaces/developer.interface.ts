export interface Developer{
  _id: string,
  nombre: string,
}
export interface TopDeveloper{
  _id: string,
  nombre: string,
  desarrollador: {
    nombre: string
    _id: string,
  },
  consolas: number,

}