import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Observable } from 'rxjs';
import { Transaction } from '../transaction';
import { TransactionServiceService } from '../transaction-service.service';
import { SavingAccount } from '../saving-account';
import { SavingAccountService } from '../saving-account.service';

import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-admindashbord',
  templateUrl: './admindashbord.component.html',
  styleUrls: ['./admindashbord.component.css']
})
export class AdmindashbordComponent implements OnInit {

  users: Observable<User[]> | any;
  transaction1: Observable<Transaction[]> | any;
  savingaccount: Observable<SavingAccount[]> | any;
  transaction:Transaction[]|any;
  wtransaction:Transaction|any;
  LocalDate : string = new Date().toLocaleString();
  constructor(private saveService: SavingAccountService, private router: Router, private transactionService: TransactionServiceService,private userService:UserService) {
    this.userService.getUserDetails().subscribe(data=>this.users=data)
    this.transactionService.getTransactionDetails().subscribe((data: any) => {
      this.transaction1 = data;
    })
  }

  isInVaildone(){
    if(!this.wtransaction.amount)
      return true;
    if(this.wtransaction.amount==0)
      return true;
    return
 }

  isInVaild(){
     if(!this.transaction.amount)
       return true;
     if(this.transaction.amount==0)
       return true;
     return (!this.isAccountVaild())||this.isTypeInVaild();
  }
  isAccountVaild(){
    if((!this.transaction.faccount)||(this.transaction.type!=undefined))
      for(let i=0;i<this.users.length;i++){
        console.log("type: ",this.transaction.type+", faccount: "+this.transaction.faccount+", email: "+this.users[i].email)
        if(this.transaction.type!=undefined){
          if(this.transaction.type.toUpperCase()=="UPI"&&this.transaction.faccount==this.users[i].email)
            return true;
          else if(this.transaction.type.toUpperCase()=="NEFT"&&this.transaction.faccount==this.users[i].accountNo)
            return true;
          else if(this.transaction.type.toUpperCase()=="RTGS"&&this.transaction.faccount==this.users[i].accountNo)
            return true;
        }

      }
    return false;
  }

  isTypeInVaild(){
     if((this.transaction.faccount)&&(this.transaction.type.toUpperCase()=="UPI"||this.transaction.type.toUpperCase()=="RTGS"||this.transaction.type.toUpperCase()=="NEFT"))
       return false;
    else 
      return true;
  }
  ngOnInit(): void {
    this.reloadData();
    this.transaction=new Transaction();
    this.wtransaction=new Transaction();
    this.wtransaction.type="withdrawl" ;
  }
  reloadData() {
    this.saveService.getSavingAccountDetails().subscribe((data: any) => {
      this.savingaccount = data;
    });
    this.userService.getUserDetails().subscribe(data=>this.users=data)
    this.transactionService.getTransactionDetails().subscribe((data: any) => {
      this.transaction1 = data;
    })
  }

  deposit(){
    this.transaction.tdate= new Date();
    this.transactionService.deposit(this.transaction).subscribe(data=>{
      console.log(data);
    })
    alert("Deposit successfull")
  }

  withdrawal(){
    this.wtransaction.tdate= new Date();
    this.transactionService.withdrawl(this.wtransaction).subscribe(data=>{
      console.log(data)
      alert(JSON.stringify(data))

    })
  }
}
