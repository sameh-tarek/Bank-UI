import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../services/account/account.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {AsyncPipe, CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe,
    CurrencyPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  accountBalance$!: Observable<any>;
  constructor(private accountService: AccountService, private router: Router) {
  }

  ngOnInit(): void {
    this.accountBalance$ = this.accountService.getAccountBalance();
  }

  viewTransactions() {
    this.router.navigate(['transactions'])
  }
}
