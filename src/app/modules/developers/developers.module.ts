import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopersRoutingModule } from './developers-routing.module';
import { DevelopersMainPageComponent } from './developers-main-page/developers-main-page.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DevelopersMainPageComponent,
  ],
  exports: [
    DevelopersMainPageComponent,
  ],
  imports: [
    CommonModule,
    DevelopersRoutingModule,
    SharedModule
  ]
})
export class DevelopersModule { }
