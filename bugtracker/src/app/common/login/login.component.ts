import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
  } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  @ViewChild('rememberMe') checkBoxRememberMe? : ElementRef;

  login? : string | null;
  private loginFailed = false;

  constructor(private elementRef: ElementRef,
              private http: HttpClient,
              private router: Router){}

  ngOnDestroy(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgb(230, 230, 230)';
    this.login = localStorage.getItem('login');
  }

  onSignIn(){
    if(this.isRemember() && this.login != null && this.login != ''){
      localStorage.setItem('login', this.login);
    }else{
      localStorage.removeItem('login');
    }
    this.http.post('/api/signin', {login: 'ivan', password: '1234'}, {}).toPromise()
    .then(
      (result) => {
        this.router.navigate(['/']);
      })
    .catch(
      (err: HttpErrorResponse) => {
        this.loginFailed = true;
      })
  }

  isRemember(): boolean{
    return localStorage.getItem('isRemember') == 'true' ? true : false;
  }

  clickRemember(){
    if(this.checkBoxRememberMe?.nativeElement.checked){
      localStorage.setItem('isRemember', 'true');
    }else{
      localStorage.setItem('isRemember', 'false');
    }
  }

  isLoginFailed(){
    return this.loginFailed;
  }

}
