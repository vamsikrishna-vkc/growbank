import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from './transaction';


@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
      
    }),responseType: 'text' as 'json'
  };

  saveTransaction(Transaction:Object):Observable<Object>
  {
    return this.http.post("http://localhost:9192/addtransaction",Transaction);
  }

  getTransactionDetails():Observable<Transaction[]|any>
{
  return this.http.get("http://localhost:9192/findAllTransaction");
}

deposit(Transaction:Object):Observable<Object>
{
  return this.http.post("http://localhost:9192/deposit",Transaction);
}

withdrawl(Transaction:Object):Observable<Object>
{
  return this.http.post("http://localhost:9192/withdraw",Transaction,this.httpOptions);
}
}
