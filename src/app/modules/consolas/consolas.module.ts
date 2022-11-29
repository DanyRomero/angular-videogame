import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsolasRoutingModule } from './consolas-routing.module';
import { ConsolasMainPageComponent } from './consolas-main-page/consolas-main-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConsolasFormComponent } from './consolas-main-page/components/consolas-form/consolas-form.component';
import { ConsolasListComponent } from './consolas-main-page/components/consolas-list/consolas-list.component';

@NgModule({
  declarations: [ConsolasMainPageComponent, ConsolasFormComponent, ConsolasListComponent],
  exports: [ConsolasMainPageComponent],
  imports: [CommonModule, SharedModule, ConsolasRoutingModule],
})
export class ConsolasModule {}
