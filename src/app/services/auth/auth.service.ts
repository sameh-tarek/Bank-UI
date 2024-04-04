import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:8081/bank/auth/authenticate', { email, password });
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:8081/bank/auth/register', { name, email, password });
  }
}
