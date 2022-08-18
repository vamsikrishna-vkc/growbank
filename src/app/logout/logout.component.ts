import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private router: Router,
    private autheticationService: UserService) { }

 
  ngOnInit(): void {
    this.autheticationService.logOut();
    this.router.navigate(['login'])
  }
}
