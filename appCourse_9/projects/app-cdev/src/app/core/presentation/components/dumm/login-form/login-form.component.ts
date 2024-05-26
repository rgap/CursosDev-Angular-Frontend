import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'cdev-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  // ! to say that its not a null value
  formGroup!: FormGroup;

  constructor() {
    this.createForm();
  }

  createForm() {
    this.formGroup = new FormGroup({
      // email: new FormControl('micorreo@email.com'),
      // email: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        ),
      ]),
    });
  }

  login() {
    // console.log(this.formGroup);
    // console.log(this.formGroup.valid ? 'Form is valid' : 'Form is invalid');
    // console.log(this.formGroup.get('email')?.hasError('required'));
    // console.log(this.formGroup);
    if (this.formGroup.valid) {
      alert('Form valid');
    }
    this.formGroup.markAllAsTouched();
    this.formGroup.updateValueAndValidity();
  }
}
