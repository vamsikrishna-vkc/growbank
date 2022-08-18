import { Component, OnInit } from '@angular/core';
import { TransactionServiceService } from '../transaction-service.service';
import { Router } from '@angular/router';
import { Transaction } from '../transaction';
import { ThisReceiver } from '@angular/compiler';
import { User } from '../user';

@Component({
  selector: 'app-imps',
  templateUrl: './imps.component.html',
  styleUrls: ['./imps.component.css']
})
export class IMPSComponent implements OnInit {

  Date1: Date = new Date();
  purpose = ['Payment towards loan repayment', 'Deposit/ Investment',
    'Gift to relatives', 'Bill payment', 'Friends', 'Donation', 'Payment of education fee',
    'Rent', 'Others'];

  LocalDate: string = new Date().toLocaleString();

  date = new Date();

  transaction: Transaction = new Transaction();
  isTypeInVaild: any;
  isAccountVaild: any;

  constructor(private tservice: TransactionServiceService, private router: Router) { }

  ngOnInit(): void {
    var Date1: Date | any = window.localStorage.getItem('Date')
    if (this.LocalDate != null)

      this.transaction.type = "LocalDate"

    var user: User | any = window.localStorage.getItem('user');
    console.log("email:" + JSON.parse(user).email)
    if (user != null)
      this.transaction.faccount = JSON.parse(user).email
    this.transaction.type = "UPI"
  }

  save() {
    this.transaction.tdate = new Date();
    this.tservice.saveTransaction(this.transaction).subscribe(data => console.log(data), error => console.log(error));
    this.transaction = new Transaction();
    //alert("Transaction Successful");
    this.router.navigate(['statuspage']);
  }

getCurrentBalance(){
  var user: User | any = localStorage.getItem('user');
  return JSON.parse(user).balance
}

  isBalanceAvailable() {
    // var user: User | any = localStorage.getItem('user');
    // let currentBal = JSON.parse(user).balance
    if (this.transaction.amount > this.getCurrentBalance()) {
      return true
    }
    else {
      return false
    }
  }

  isInVaild(): boolean {
    if ((!this.transaction.type) || (!this.transaction.faccount) || (!this.transaction.taccount) || (!this.transaction.amount) || (!this.transaction.tpassword) || (!this.transaction.remark) || this.isBalanceAvailable()) 
    { return true; }

    else {
      return false;
    }
  }

}


