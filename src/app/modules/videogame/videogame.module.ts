import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideogameRoutingModule } from './videogame-routing.module';
import { VideogameFormComponent } from './videogame-main-page/components/videogame-form/videogame-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideogameMainPageComponent } from './videogame-main-page/videogame-main-page.component';


@NgModule({
  declarations: [
    VideogameFormComponent,
    VideogameMainPageComponent,

  ],
  exports: [
    VideogameMainPageComponent,
  ],
  imports: [
    CommonModule,
    VideogameRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VideogameModule { }
