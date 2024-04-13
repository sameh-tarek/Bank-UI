import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {getToken, logOut} from "../../environments/environments";
import {audit} from "rxjs";
import {NgIf} from "@angular/common";
import {AuthService} from "../../services/auth/auth.service";

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

  constructor(private router: Router, private authService: AuthService) {
  }
  isAuthenticated() {
    return getToken() != null && this.authService.IsValidToken();
  }

  logout() {
    logOut()
    this.router.navigate(['']);
  }
}
