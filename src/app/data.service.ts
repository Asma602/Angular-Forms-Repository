import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import {  HttpClient, HttpHeaders } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _httpClient : HttpClient) { }

  url = 'http://localhost:3000/users';
  users() : Observable<any>{
    return this._httpClient.get(this.url);
  }

  addNewUser(user : any) : Observable<any>{
    return this._httpClient.post(this.url,user);
  }

  // ,{
  //   headers: new HttpHeaders({
  //       'Content-Type' : 'application/json'
  //   }),
  // });
  deleteUser(id : number) : Observable<any>{
    return this._httpClient.delete(`${this.url}/${id}`);
  }
  updateUser(user : any) : Observable<any>{
    return this._httpClient.put(`${this.url}/${user.id}`,user)
  }
}
