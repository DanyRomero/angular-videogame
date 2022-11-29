import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-developer-form',
  templateUrl: './developer-form.component.html',
  styleUrls: ['./developer-form.component.css']
})
export class DeveloperFormComponent {
  submitted = false;
 
  developerForm = this.fb.group({
    nombre: ['', Validators.required],
  });

  @Output() onSubmit = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  
  get name() {
    return this.developerForm.get('nombre');
  }

  handleSubmit() {
    this.submitted = true

    if (this.developerForm.valid) {
      this.onSubmit.emit(this.developerForm.value)
      this.submitted = false
      this.developerForm.reset()
    }
  }
}
