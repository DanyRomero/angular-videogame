import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Consolee } from 'src/app/core/interfaces/console.interface';

@Component({
  selector: 'app-consolas-form',
  templateUrl: './consolas-form.component.html',
})
export class ConsolasFormComponent implements OnInit {
  submitted = false;
  //readonly form: FormGroup = new FormGroup({});
  //private inputName: FormControl;
  consoleForm = this.fb.group({
    nombre: ['', Validators.required],
  });

 /*  @Input() userId: number = 0; */
  @Output() onSubmit = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    //this.inputName = new FormControl(null, [Validators.required]);
    //this.form.addControl('inputName', this.inputName);
  }

  get name() {
    return this.consoleForm.get('nombre');
  }

  handleSubmit() {
    this.submitted = true

    if (this.consoleForm.valid) {
      this.onSubmit.emit(this.consoleForm.value)
      this.submitted = false
      this.consoleForm.reset()
    }
  }
}
