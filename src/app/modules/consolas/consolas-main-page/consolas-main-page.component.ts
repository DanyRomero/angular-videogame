import { Component, OnInit } from '@angular/core';
import { Consolee } from 'src/app/core/interfaces/console.interface';
import { SessionService } from 'src/app/core/session/session.service';
import { ConsoleeService } from '../service/consolee.service';

@Component({
  selector: 'app-consolas-main-page',
  templateUrl: './consolas-main-page.component.html',
})
export class ConsolasMainPageComponent implements OnInit {
  list: Consolee[] = [];
  newId = 73737;
  constructor(
    private session: SessionService,
    private consoleService: ConsoleeService
  ) {}

  ngOnInit(): void {
    const userId = this.session.getUserId();
    this.consoleService.getConsoles(userId).subscribe(
      (data: Consolee[]) => {
        console.log('getConsoles');
        this.list = data;
      },
      (error) => {}
    );
    this.consoleService.getInterval().subscribe(() => {
      console.log(1);
    });
  }

  pruebaConsole() {}

  listenSubmit(data: Consolee) {
    console.log(data);
    this.consoleService.createConsoles(data).subscribe(
      (data: Consolee) => {
        console.log('Si se agrego');
      },
      (error) => {}
    );
  }
}
