import { Component, OnInit } from '@angular/core';
import { VideogameServiceService } from '../videogame-main-page/services/videogame.service.service';
import { Videogame } from '../../../core/interfaces/videogame.interface';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Consolee } from '../../../core/interfaces/console.interface';

@Component({
  selector: 'app-videogame-details',
  templateUrl: './videogame-details.component.html',
  styleUrls: ['./videogame-details.component.css'],
})
export class VideogameDetailsComponent implements OnInit {
  videogame: Videogame | undefined;
  id: string = ""
  consolas: Consolee[] | undefined= []
  comaConsolas: string  | undefined= ""

  

  constructor(
    private VideogameService: VideogameServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      let id = data.get("id")
      if (id) {
        this.id= id
        this.fetchOneVideogame(id)
  
      }
    });
  }

  fetchOneVideogame(id: string) {
    this.VideogameService.fetchOneVideogame(id).subscribe(
      (data) => {
        this.videogame = data
        this.consolas = this.videogame.consolas
        this.comaConsolas = this.consolas?.map(consola=>consola.nombre).join(", ")
      }
    );
  }

 
}
