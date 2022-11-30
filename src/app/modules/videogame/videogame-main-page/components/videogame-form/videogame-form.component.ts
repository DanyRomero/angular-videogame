import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-videogame-form',
  templateUrl: './videogame-form.component.html',
})
export class VideogameFormComponent {
  constructor(private fb: FormBuilder) {}
  videogameForm = this.fb.group({
    name: [''],
    description: [''],
    developer: [""],
    year: [],
    consoles: [],
  });


  onSubmit(){
    console.log(this.videogameForm.value)
  }
}
