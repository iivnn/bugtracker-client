import { Injectable } from '@angular/core';
import { Project } from '../classes/Project';
import { UserInfo } from '../classes/UserInfo';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  userInfo?: UserInfo;
  constructor() { }
}
