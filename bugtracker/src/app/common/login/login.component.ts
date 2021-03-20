import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  @ViewChild('rememberMe') checkBoxRememberMe? : ElementRef;

  login : string | null;

  constructor(private elementRef: ElementRef) {
    this.login = localStorage.getItem('login');
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgb(248, 247, 247)';
  }

  onSignIn(){
    if(this.isRemember() && this.login != null && this.login != ''){
      localStorage.setItem('login', this.login);
    }
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

}
