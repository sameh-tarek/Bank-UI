import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {getToken, logOut} from "../../environments/environments";
import {audit} from "rxjs";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) {
  }
  isAuthenticated() {
    return getToken() != null;
  }

  logout() {
    logOut()
    this.router.navigate(['']);
  }

  protected readonly audit = audit;

  dashboard() {
    this.router.navigate(['home']);
  }
}
