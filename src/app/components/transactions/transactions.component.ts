import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccountService} from "../../services/account/account.service";
import {CurrencyPipe, DatePipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    JsonPipe,
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit, OnDestroy {
  transactions!: any[];
  subscription!: Subscription;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.getAccountTransactions();
    // Polling every 10 seconds (adjust as needed)
    this.subscription = interval(10000).subscribe(() => {
      this.getAccountTransactions();
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.subscription.unsubscribe();
  }

  getAccountTransactions(): void {
    this.accountService.getAccountTransactions().subscribe(
      transactions => {
        this.transactions = transactions;
      },
      error => {
        console.error('Error fetching transactions:', error);
      }
    );
  }
}
