import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
      
    }),responseType: 'text' as 'json'
  };

  getUserDetails():Observable<any>
{
  return this.http.get(`${'http://localhost:9192/findAllUser'}`);
}

  saveUser(User:Object):Observable<any>
  {

    return this.http.post(`${'http://localhost:9192/registerUser'}`,User,this.httpOptions);
  }

  login(User:any):Observable<any>
  {
    return this.http.post(`${'http://localhost:9192/loginUser'}`,User);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
 
  logOut() {
    localStorage.removeItem('user')
    sessionStorage.removeItem('username')
  }
    baseurl="http://localhost:9192/findAllUser";
  getUsers(email:string):Observable<any>{
    return this.http.get(`${this.baseurl}/${email}`);
  }


  getUserone(email: string|any){
    return this.http.get("http://localhost:9192/User/"+email);
  }
}
