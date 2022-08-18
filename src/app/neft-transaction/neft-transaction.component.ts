import { Component, OnInit } from '@angular/core';
import { TransactionServiceService } from '../transaction-service.service';
import { Router } from '@angular/router';
import { Transaction } from '../transaction';
import { User } from '../user';


@Component({
  selector: 'app-neft-transaction',
  templateUrl: './neft-transaction.component.html',
  styleUrls: ['./neft-transaction.component.css']
})
export class NeftTransactionComponent implements OnInit {
  date =  new Date();
  purpose = ['Payment towards loan repayment','Deposit/ Investment',
  'Gift to relatives','Bill payment', 'Friends','Donation','Payment of education fee',
  'Rent','Others'];

  agreecheck:boolean=false
  transaction:Transaction=new Transaction();
  buttonDisabled= true;
  constructor(private tservice:TransactionServiceService,private router:Router) { }

  ngOnInit(): void {
    var user:User|any=window.localStorage.getItem('user');
    if(user!=null)
      this.transaction.faccount=JSON.parse(user).accountNo+""
    this.transaction.type="neft"
  }

  save(){
    this.transaction.tdate= new Date();
    this.tservice.saveTransaction(this.transaction).subscribe(data => {
      console.log(data)
    }, error =>{
      console.log(error)
    });
    
    alert("transaction successfull!");
    this.transaction=new Transaction();
    this.router.navigate(['statuspage']);
  }
  ngOnInitone(): void {
    this.buttonDisabled=this.isInVaild()
  }/*
  isInVaild(): boolean {
    if(!this.agreecheck)
     return true;
    if((!this.transaction.type)||(!this.transaction.faccount)||(!this.transaction.taccount)||(!this.transaction.amount)||(!this.transaction.tpassword)||(!this.transaction.remark))
      return true;
    return false;
  }*/




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
