import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Subscriber } from 'rxjs';
import { Transaction } from '../transaction';
import { TransactionServiceService } from '../transaction-service.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  email: string | any;

  user: User | any;
  us:User|any;
  transactions:Transaction[]|any;


  constructor(private transactionService:TransactionServiceService,private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.userService.getUserone(sessionStorage.getItem('username')).subscribe(data=>{
      localStorage.setItem('user',JSON.stringify(data))
      this.us=data;
    })
  }




  ngOnInit(): void {
    // this.getUserone();
    this.userService.getUserone(sessionStorage.getItem('username')).subscribe(data=>{
      localStorage.setItem('user',JSON.stringify(data))
      this.us=data;
    })
    this.transactionService.getTransactionDetails().subscribe(data=>{
      this.transactions=data;
    })
    this.userService.getUserDetails().subscribe((data)=>{
      this.user=data;
   });
  }

}




