import { Component, OnInit } from '@angular/core';
import { ConsoleeService } from '../../consolas/service/consolee.service';
import { VideogameServiceService } from './services/videogame.service.service';
import { DeveloperService } from '../../developers/service/developer.service';
import { Consolee } from 'src/app/core/interfaces/console.interface';
import { Developer } from '../../../core/interfaces/developer.interface';
import { Videogame } from '../../../core/interfaces/videogame.interface';

@Component({
  selector: 'app-videogame-main-page',
  templateUrl: './videogame-main-page.component.html',
})
export class VideogameMainPageComponent implements OnInit {
  consoles: Consolee[]= []
  developers: Developer[] = []
  videogames: Videogame[] = []

  constructor(
    private ConsoleService: ConsoleeService,
    private DeveloperService: DeveloperService,
    private VideogameService: VideogameServiceService
  ) {}
  ngOnInit(): void {
    
    this.fetchConsolas()
    this.fetchVideogames()

  }

  fetchConsolas(){
    this.ConsoleService.fetchConsoles().subscribe((data)=>{
      this.consoles = data;
    });
  }

  fetchDevelopers(){
    this.DeveloperService.fetchDevelopers().subscribe((data)=>{
      this.developers= data;
    })
  }

  fetchVideogames(){
    this.VideogameService.fetchVideogames().subscribe((data)=>{
      this.videogames = data;
     
    });
  }

  deleteVideogame(id: string){
    this.VideogameService.deleteVideogame(id).subscribe( data =>{
      this.fetchVideogames()
    })
  }
}
