import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideogameRoutingModule } from './videogame-routing.module';
import { VideogameFormComponent } from './videogame-form/videogame-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VideogameFormComponent
  ],
  exports: [
    VideogameFormComponent
  ],
  imports: [
    CommonModule,
    VideogameRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VideogameModule { }
