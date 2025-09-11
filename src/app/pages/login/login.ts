import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginData = {
    email: '',
    password: '',
    rememberMe: false
  };

  onSubmit(loginForm: any) {
    if (loginForm.valid) {
      console.log('Login form submitted:', this.loginData);
      // TODO: Implement actual login logic
    }
  }
}
