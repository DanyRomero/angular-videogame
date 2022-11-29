import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/core/session/session.service';
import { ConsoleeService } from '../../consolas/service/consolee.service';

@Component({
  selector: 'app-developers-main-page',
  templateUrl: './developers-main-page.component.html',
})
export class DevelopersMainPageComponent implements OnInit {
  constructor(
    private session: SessionService,
    private consoleService: ConsoleeService
  ) {}

  ngOnInit(): void {
    const userId = this.session.getUserId();
    //peticion de desarrolladores
  }
}
