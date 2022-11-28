import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
})
export class NameFormComponent {

  submitted = false
  consoleForm = this.fb.group({
    name: ['', Validators.required]
  }) 

  constructor(private fb: FormBuilder) {}

  get name() {
    return this.consoleForm.get('name')
  }

  onSubmit() {
    this.submitted = true
    console.log(this.consoleForm.value)
  }
}
