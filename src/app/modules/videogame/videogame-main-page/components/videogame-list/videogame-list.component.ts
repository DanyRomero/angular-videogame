import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Videogame } from '../../../../../core/interfaces/videogame.interface';
import { VideogameServiceService } from '../../services/videogame.service.service';

@Component({
  selector: 'app-videogame-list',
  templateUrl: './videogame-list.component.html',
  styleUrls: ['./videogame-list.component.css']
})
export class VideogameListComponent {
  @Input() videogames: Videogame[]= []
  @Output() onDeleteVideogame = new EventEmitter();
  
  deleteVideogame(id: string){
    this.onDeleteVideogame.emit(id);
  }
  

}
