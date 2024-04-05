import { Injectable } from '@angular/core';
import {localhost} from "../../environments/environments";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountLogin} from "../../models/accountLogin/account-login";
import {AccountRegister} from "../../models/accountRegister/account-register";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = localhost();

  constructor(private http: HttpClient) { }

  authenticate(accountLoginDetails: AccountLogin): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/authenticate`, accountLoginDetails);
  }

  register(accountRegisterDetails: AccountRegister): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/register`, accountRegisterDetails);
  }
}
