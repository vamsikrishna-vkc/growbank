import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SavingAccountService {
  
  

  constructor(public http:HttpClient) { }

  saveAccount(SavingAccount:Object):Observable<Object>
  {
    return this.http.post(`${'http://localhost:9192/savingaccount'}`,SavingAccount);
  }

  getSavingAccountDetails():Observable<any>
  {
    return this.http.get(`${'http://localhost:9192/findAllAccount'}`);
  }
}
