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
    name: ['', Validators.required],
  });

  @Input() userId: number = 0;
  @Output() submitForm = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    //this.inputName = new FormControl(null, [Validators.required]);
    //this.form.addControl('inputName', this.inputName);
  }

  get name() {
    return this.consoleForm.get('name');
  }

  onSubmit() {
    this.submitted = true;
    if (this.consoleForm.valid) {
      const data: Consolee = {} as Consolee;
      data.name = this.consoleForm.get('name')!.value || '';
      data.userId = this.userId;
      this.submitForm.emit(data);
    }
  }
}
