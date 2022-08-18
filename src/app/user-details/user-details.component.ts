import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { User } from '../user';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  customers: Observable<User[]> | any;

  email:String | any;

  user:User | any;

  constructor(private route:ActivatedRoute,
    private router:Router,
    private userService:UserService,) { }

  ngOnInit(): void {
    this.user=new User();

this.email=this.route.snapshot.params['email'];

alert(this.email);
    this.userService.getUsers(this.email)
    .subscribe(data=>{
      console.log(data)
      this.user=data;
    },error=>console.log(error));
  }

  list(){
    this.router.navigate(['customers']);
  }

  
  UserDetails(email:string){
    this.router.navigate(['udetails',email]);
  }

}
