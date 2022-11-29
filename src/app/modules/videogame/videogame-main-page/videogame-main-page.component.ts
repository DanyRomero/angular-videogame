import { Component, OnInit } from '@angular/core';
import { ConsoleeService } from '../../consolas/service/consolee.service';

@Component({
  selector: 'app-videogame-main-page',
  templateUrl: './videogame-main-page.component.html',
  styleUrls: ['./videogame-main-page.component.css'],
})
export class VideogameMainPageComponent implements OnInit {
  constructor(private consoleService: ConsoleeService) {}
  ngOnInit(): void {
    this.consoleService.fetchConsoles().subscribe();
  }
}
