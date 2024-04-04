import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {AccountLogin} from "../../models/accountLogin/account-login";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {localhost, saveToken} from "../../environments/environments";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  accountLogin: AccountLogin = new AccountLogin('', '');

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  private baseUrl = localhost();
  submitForm() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.http.post<any>(`${this.baseUrl}/auth/authenticate`, formData)
        .subscribe({
          next: response => {
            saveToken(response.token)
            console.log(response);
          },
          error: error => {
            // Handle error
            console.error('There was an error!', error);
          }
        });
    }
  }
}
