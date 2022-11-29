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
  add = false;
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
    let count = 1;
    this.consoleService.getInterval().subscribe(() => {
      count += 1;
      console.log('Yo soy el interval ' + count);
    });
  }

  newConsole() {
    this.add = true;
  }

  pruebaConsole() {}

  listenSubmit(data: Consolee) {
    console.log('Yo soy del output/Listen', data);
    this.consoleService.createConsoles(data).subscribe(
      (data) => {
        console.log('Si se agrego');
      },
      (error) => {}
    );
  }
}
