import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameFormComponent } from './name-form/name-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    NavbarComponent,
    NameFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule
    
  ],
  exports: [
    NavbarComponent,
    NameFormComponent,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class SharedModule { }
