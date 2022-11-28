import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { NameFormComponent } from 'src/app/core/name-form/name-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    NameFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    NameFormComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
