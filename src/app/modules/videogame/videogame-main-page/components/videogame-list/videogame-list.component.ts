import { Component, Input } from '@angular/core';
import { Videogame } from '../../../../../core/interfaces/videogame.interface';

@Component({
  selector: 'app-videogame-list',
  templateUrl: './videogame-list.component.html',
  styleUrls: ['./videogame-list.component.css']
})
export class VideogameListComponent {
  @Input() videogames: Videogame[]= []
}
