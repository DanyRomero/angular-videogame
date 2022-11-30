import { Component, OnInit } from '@angular/core';
import { ConsoleeService } from '../../consolas/service/consolee.service';
import { VideogameServiceService } from './services/videogame.service.service';
import { DeveloperService } from '../../developers/service/developer.service';

@Component({
  selector: 'app-videogame-main-page',
  templateUrl: './videogame-main-page.component.html',
})
export class VideogameMainPageComponent implements OnInit {
  constructor(
    private consoleService: ConsoleeService,
    private DeveloperService: DeveloperService,
    private VideogameService: VideogameServiceService
  ) {}
  ngOnInit(): void {
    this.consoleService.fetchConsoles().subscribe();
  }
}
