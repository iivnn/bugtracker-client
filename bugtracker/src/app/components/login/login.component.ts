import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
  } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  @ViewChild('rememberMe') checkBoxRememberMe? : ElementRef;
  login: string | null;
  private loginFailed = false;
  loginForm: FormGroup;

  constructor(private elementRef: ElementRef,
              private router: Router,
              private userService: UserService){

    this.login = localStorage.getItem('login');
    this.loginForm = new FormGroup({
      'login': new FormControl(this.login, Validators.required),
      'password': new FormControl('', Validators.required)
    })

  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgb(230, 230, 230)';
  }

  onSignIn(){
    this.userService.signIn(this.loginForm.value.login, this.loginForm.value.password).toPromise()
    .then(
      (result) => {
        if(this.isRemember()){
          localStorage.setItem('login', this.loginForm.value.login);
        }else{
          localStorage.removeItem('login');
        }
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
