import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactive-demo.html',
  styleUrl: './reactive-demo.css',
})
export class ReactiveDemo {
  roles = ['Admin', 'User', 'Guest'];
  form!: FormGroup;
  showPopup = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{4,12}$/)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]],
      role: ['', Validators.required],
      status: ['', Validators.required],
      notes: [''],
    });
  }

  onSubmit() {
    // Mark all controls as touched to trigger validation messages
    this.form.markAllAsTouched();
    // Force Angular to update the form validity
    this.form.updateValueAndValidity();
    if (this.form.valid) {
      this.showPopup = true;
      setTimeout(() => this.showPopup = false, 3000);
    }
  }

  isInvalid(name: string) {
    const control = this.form.get(name);
    return control?.touched && control?.invalid;
  }
}
