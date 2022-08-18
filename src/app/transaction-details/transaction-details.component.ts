import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionServiceService } from '../transaction-service.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {
  transactions:Transaction[]|any;
  user: User | any;
  constructor(private transactionService:TransactionServiceService,private userService: UserService) { 
    this.userService.getUserone(sessionStorage.getItem('username')).subscribe(data=>{
      localStorage.setItem('user',JSON.stringify(data))
      this.user=data;
    })
  }

  ngOnInit(): void {
    this.transactions=[]
    this.transactionService.getTransactionDetails().subscribe(data=>{
      this.transactions=data
      for(let i=this.transactions.length;i>=0;i--){
        if(this.transactions[i].taccount!=this.user.accountNo&&this.user.email!=this.transactions[i].taccount&&
          this.transactions[i].faccount!=this.user.accountNo&&this.user.email!=this.transactions[i].faccount)
           this.transactions.splice(i,1);
      }
    })
  }

}
