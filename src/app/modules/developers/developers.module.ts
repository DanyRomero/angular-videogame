import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopersRoutingModule } from './developers-routing.module';
import { DevelopersMainPageComponent } from './developers-main-page/developers-main-page.component';


@NgModule({
  declarations: [
    DevelopersMainPageComponent
  ],
  exports: [
    DevelopersMainPageComponent
  ],
  imports: [
    CommonModule,
    DevelopersRoutingModule
  ]
})
export class DevelopersModule { }
