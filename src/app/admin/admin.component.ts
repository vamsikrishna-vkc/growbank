import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  email='admin@growbank.com'
  password='123456789'
  invalidLogin=false;
  errorMessage='Invalid Credentials';
  successMessage:string | any;
  loginSuccess=false;
  loginService: any;
  UserService: any;

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
  }
  checkAdmin(){

    let admin={
      "email":this.email,
      "password":this.password,
    }

    this.UserService.admin(User)
    .subscribe((response : any )=>{
      console.log(Response);
      if(response)
      {
        this.router.navigate(['admindashbord']);
        sessionStorage.setItem('email', this.email)
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Admin Successful.';
        
      }
      
      else{
        this.invalidLogin = true;
      }
      
    });
    this.loginSuccess = false;
  }

}
