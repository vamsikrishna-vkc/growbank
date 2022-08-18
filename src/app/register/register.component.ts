import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  user:User=new User();
  buttonDisabled=true;

  agreecheck:boolean=false;

  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
    this.user=new User();
    this.buttonDisabled=this.isInVaild()
  }

  save(){
    this.userservice.saveUser(this.user).subscribe(data=> {
      console.log(data)
      this.router.navigate(['/home']);
      alert("Registered Successfully");
    }, error =>{
      console.log(error)
    });
    this.user=new User();  
  }

  

  isInVaild(){
    if(!this.agreecheck)
       return true;
    if((!this.user.accountNo)||(!this.user.name)||(!this.user.email)||(!this.user.tranpassword)||(!this.user.retranpassword)||(!this.user.password)||(!this.user.repassword)||(!this.user.balance))
       return true;
    if(this.user.password==""||this.user.password!=this.user.repassword)
      return true;
    if(this.user.tranpassword==""||this.user.tranpassword!=this.user.retranpassword)
      return true;
    if(!this.user.email.endsWith("@growbank.com"))
      return true;
    return false;
    
  }

  isInValidMail(){
    if(!this.user.email)
      return true;
    if(!this.user.email.endsWith("@growbank.com"))
      return true;
    return false;
  }
}
