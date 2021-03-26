import { Injectable } from '@angular/core';
import { UserInfo } from '../classes/UserInfo';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  userInfo?: UserInfo;

  constructor() { }
}
