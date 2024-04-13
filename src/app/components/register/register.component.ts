import { Component } from '@angular/core';
import {AccountRegister} from "../../models/accountRegister/account-register";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {localhost, saveToken} from "../../environments/environments";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  private baseUrl = localhost();

  submitForm() {
    if (this.signupForm.valid) {
        this.authService.register(this.signupForm.value as AccountRegister).subscribe({
          next: response => {
            saveToken(response.token)
            this.router.navigate(['home']);
            console.log(response);
          },
          error: error => {
            console.error('There was an error!', error);
          }
        });
    }
  }
}
