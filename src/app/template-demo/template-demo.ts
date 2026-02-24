import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './template-demo.html',
  styleUrl: './template-demo.css',
})
export class TemplateDemo {
  title = 'Template Driven Demo';
  username = '';
  email = '';
  password = '';
  role = '';
  gender = '';
  status = '';
  notes = '';
  submitted = false;
  showPassword = false;
  showPopup = false;
  popupTimeout: any;

  onSubmit() {
    this.submitted = true;
    this.showPopup = true;
    clearTimeout(this.popupTimeout);
    this.popupTimeout = setTimeout(() => {
      this.showPopup = false;
    }, 3500);
    // Remove any return statement here. Angular will handle the form submission.
  }
}
