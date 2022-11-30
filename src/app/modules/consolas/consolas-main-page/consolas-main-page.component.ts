import { Component, OnInit } from '@angular/core';
import { Consolee } from 'src/app/core/interfaces/console.interface';
import { SessionService } from 'src/app/core/session/session.service';
import { ConsoleeService } from '../service/consolee.service';
import { TopConsole } from '../../../core/interfaces/console.interface';

@Component({
  selector: 'app-consolas-main-page',
  templateUrl: './consolas-main-page.component.html',
})
export class ConsolasMainPageComponent implements OnInit {
  consolasList: Consolee[] = [];
  topConsoles: TopConsole[] = []
  /*  newId = 73737;
  add = false; */

  constructor(
    private session: SessionService,
    private consoleService: ConsoleeService
  ) {}

  ngOnInit(): void {
    /*const userId = this.session.getUserId();
    this.consoleService.fetchConsoles(userId).subscribe(
      (data: Consolee[]) => {
        console.log(' getConsoles subscribe');
        this.list = data;
      },
      (error) => {console.log("error", error)}
    );
    let count = 1;*/
    this.fetchConsoles();
    this.fetchTopConsoles()
  }

  /*  newConsole() {
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
  } */

  fetchConsoles() {
    this.consoleService.fetchConsoles().subscribe((data: Consolee[]) => {
      this.consolasList = data;
    });
  }

  createConsole(consolee: Consolee) {
    this.consoleService.postConsole(consolee).subscribe((data) => {
      this.fetchConsoles();
    });
  }

  fetchTopConsoles(){
    this.consoleService.fetchTopConsoles().subscribe((data)=>{
      this.topConsoles= data;
      console.log("topConsolas", this.topConsoles)
    })
  }

  deleteConsole(id: string){
    this.consoleService.deleteConsole(id).subscribe((data)=>{
      this.fetchConsoles();
    })
  }
}
