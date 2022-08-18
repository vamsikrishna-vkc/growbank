import { Component, OnInit } from '@angular/core';
import { SavingAccount } from '../saving-account';
import { SavingAccountService } from '../saving-account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-saving-account',
  templateUrl: './saving-account.component.html',
  styleUrls: ['./saving-account.component.css']
})
export class SavingAccountComponent implements OnInit {

  agreecheck:boolean=false;

  buttonDisabled=true;

  
  

  savingaccount:SavingAccount= new SavingAccount();


  constructor(private userservice:SavingAccountService,private router:Router) { }

  ngOnInit(): void {
    this.buttonDisabled=this.isInVaild()
  }
  isInVaild(): boolean {
    if(!this.agreecheck)
     return true;
    if((!this.savingaccount.fname)||(!this.savingaccount.mname)||(!this.savingaccount.lname)||(!this.savingaccount.email)||(!this.savingaccount.phoneNo)||(!this.savingaccount.adhaarNo)||(!this.savingaccount.dob)||(!this.savingaccount.street)||(!this.savingaccount.city)||(!this.savingaccount.pincode))
      return true;
    return false;
  }

  save(){
    this.userservice.saveAccount(this.savingaccount).subscribe(data => console.log(data), error => console.log(error));
    this.savingaccount=new SavingAccount();
    alert("Registered  Successfully");
    this.router.navigate(['/login']);
      
  }
}
