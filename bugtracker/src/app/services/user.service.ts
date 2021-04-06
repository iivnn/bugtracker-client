import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from '../classes/UserInfo';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signIn(login: string, password: string){
    return this.http.post('/api/signin', {login: login, password: password });
  }

  getUser(){
    return this.http.get('/api/user');
  }

}
