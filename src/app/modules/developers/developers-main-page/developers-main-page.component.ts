import { Component, OnInit } from '@angular/core';
import { Developer } from 'src/app/core/interfaces/developer.interface';
import { SessionService } from 'src/app/core/session/session.service';
import { ConsoleeService } from '../../consolas/service/consolee.service';
import { DeveloperService } from '../service/developer.service';
import { TopDeveloper } from '../../../core/interfaces/developer.interface';

@Component({
  selector: 'app-developers-main-page',
  templateUrl: './developers-main-page.component.html',
})
export class DevelopersMainPageComponent implements OnInit {
   developers: Developer[]= []
   topDevelopers: TopDeveloper[]= []
  
  constructor(
    private DeveloperService: DeveloperService
  ) {}

 
  ngOnInit(): void {
    this.fetchDevelopers()
    this.fetchTopDevelopers()
  }

  fetchDevelopers(){
    this.DeveloperService.fetchDevelopers().subscribe((data)=>{
      this.developers= data
    })
  }

  fetchTopDevelopers(){
    this.DeveloperService.fetchTopDevelopers().subscribe((data)=>{
      this.topDevelopers= data;
      console.log("topDesarrolladores", this.topDevelopers)
    })
  }

  postDeveloper(developer: Developer){
    this.DeveloperService.postDeveloper(developer).subscribe((data)=>{
      this.fetchDevelopers()
    })
  }

  deleteDeveloper(id: string){
    this.DeveloperService.deleteDeveloper(id).subscribe(data => {
      this.fetchDevelopers();
    })
  }
}
