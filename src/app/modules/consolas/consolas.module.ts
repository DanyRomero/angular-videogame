import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsolasRoutingModule } from './consolas-routing.module';
import { ConsolasMainPageComponent } from './consolas-main-page/consolas-main-page.component';


@NgModule({
  declarations: [
    ConsolasMainPageComponent
  ],
  exports: [
    ConsolasMainPageComponent
  ],

  imports: [
    CommonModule,
    ConsolasRoutingModule
  ]
})
export class ConsolasModule { }
