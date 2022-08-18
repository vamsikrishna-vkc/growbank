import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username=''
  password=''
  invalidLogin=false;
  errorMessage='Invalid Credentials';
  successMessage:string | any;
  loginSuccess=false;
  

  constructor(private router: Router,
    private loginService: UserService) { }

  ngOnInit(): void {
  }
  
  checkLogin() {
    let user={
      "email":this.username,
      "password":this.password
    }
    this.loginService.login(user).subscribe((response) => {
      console.log(response);
      if(response)
      {
        this.router.navigate(['account']);
        sessionStorage.setItem('username', this.username)
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Login Successful.';
        setTimeout(()=>{
          localStorage.removeItem('user')
          sessionStorage.removeItem('username')
          this.router.navigate(['login'])
        }, 300000)
      }
      else{
        this.invalidLogin = true
      }
    });
 
    this.loginSuccess = false;
    
    
  }
  
  }

  
 


