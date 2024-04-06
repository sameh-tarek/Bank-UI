import { Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {TransactionsComponent} from "./components/transactions/transactions.component";
import {AuthGuard} from "./guards/authGuard/auth-guard.service";

export const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {path: 'register', component: RegisterComponent},
  {path: 'transactions', component: TransactionsComponent},
  { path: '**', redirectTo: '/login' }
];
