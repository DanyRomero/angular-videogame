import { Component, OnInit } from '@angular/core';
import { VideogameServiceService } from '../videogame-main-page/services/videogame.service.service';
import { Videogame } from '../../../core/interfaces/videogame.interface';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-videogame-details',
  templateUrl: './videogame-details.component.html',
  styleUrls: ['./videogame-details.component.css'],
})
export class VideogameDetailsComponent implements OnInit {
  videogame: Videogame | undefined;
  id: string = ""
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
      (data) => (this.videogame = data)
    );
  }
}
