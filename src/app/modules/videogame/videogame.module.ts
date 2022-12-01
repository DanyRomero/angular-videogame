import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideogameRoutingModule } from './videogame-routing.module';
import { VideogameFormComponent } from './videogame-main-page/components/videogame-form/videogame-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideogameMainPageComponent } from './videogame-main-page/videogame-main-page.component';
import { VideogameListComponent } from './videogame-main-page/components/videogame-list/videogame-list.component';
import { VideogameDetailsComponent } from './videogame-details/videogame-details.component';
import { RouterModule } from '@angular/router';
import { VideogameEditFormComponent } from './videogame-main-page/components/videogame-edit-form/videogame-edit-form.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    VideogameFormComponent,
    VideogameMainPageComponent,
    VideogameListComponent,
    VideogameDetailsComponent,
    VideogameEditFormComponent,
    

  ],
  exports: [
    VideogameMainPageComponent,
  ],
  imports: [
    CommonModule,
    VideogameRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ]
})
export class VideogameModule { }
