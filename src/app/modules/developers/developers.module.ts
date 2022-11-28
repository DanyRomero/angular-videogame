import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopersRoutingModule } from './developers-routing.module';
import { DevelopersMainPageComponent } from './developers-main-page/developers-main-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DevelopersMainPageComponent
  ],
  exports: [
    DevelopersMainPageComponent
  ],
  imports: [
    CommonModule,
    DevelopersRoutingModule,
    FormsModule
  ]
})
export class DevelopersModule { }
