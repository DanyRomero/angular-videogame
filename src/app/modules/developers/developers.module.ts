import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopersRoutingModule } from './developers-routing.module';
import { DevelopersMainPageComponent } from './developers-main-page/developers-main-page.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeveloperFormComponent } from './developers-main-page/components/developer-form/developer-form.component';
import { DevelopersListComponent } from './developers-main-page/components/developers-list/developers-list.component';



@NgModule({
  declarations: [
    DevelopersMainPageComponent,
    DeveloperFormComponent,
    DevelopersListComponent,
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
