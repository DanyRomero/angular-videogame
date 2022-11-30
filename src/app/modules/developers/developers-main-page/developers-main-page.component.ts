import { Component, OnInit } from '@angular/core';
import { Developer } from 'src/app/core/interfaces/developer.interface';
import { SessionService } from 'src/app/core/session/session.service';
import { ConsoleeService } from '../../consolas/service/consolee.service';
import { DeveloperService } from '../service/developer.service';

@Component({
  selector: 'app-developers-main-page',
  templateUrl: './developers-main-page.component.html',
})
export class DevelopersMainPageComponent implements OnInit {
   developers: Developer[]= []
  
  constructor(
    private DeveloperService: DeveloperService
  ) {}

 
  ngOnInit(): void {
    this.fetchDevelopers()
  }

  fetchDevelopers(){
    this.DeveloperService.fetchDevelopers().subscribe((data)=>{
      this.developers= data
    })
  }
  postDeveloper(developer: Developer){
    this.DeveloperService.postDeveloper(developer).subscribe((data)=>{
      this.fetchDevelopers()
    })
  }
}
