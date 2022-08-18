import { Component } from '@angular/core';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GrowBank';
  constructor(public userService:UserService){}
}
