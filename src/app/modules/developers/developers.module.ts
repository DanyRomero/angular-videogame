import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopersRoutingModule } from './developers-routing.module';
import { DevelopersMainPageComponent } from './developers-main-page/developers-main-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeveloperFormComponent } from './developers-main-page/components/developer-form/developer-form.component';
import { DevelopersListComponent } from './developers-main-page/components/developers-list/developers-list.component';
import { TopDevelopersComponent } from './developers-main-page/components/top-developers/top-developers.component';



@NgModule({
  declarations: [
    DevelopersMainPageComponent,
    DeveloperFormComponent,
    DevelopersListComponent,
    TopDevelopersComponent,
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
