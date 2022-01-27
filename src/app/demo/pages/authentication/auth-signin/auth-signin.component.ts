import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
import  { environment } from 'src/environments/environment.prod'
@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {
  public btnLoader: boolean;
  loginForm:FormGroup;
  jwt:any;
  verifConnexion:boolean = false;
  URL = environment.BaseUrl;
  constructor(private router:Router ,private fb:FormBuilder,private http:HttpClient) {
    this.loginForm = fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    }) 
    this.btnLoader = false;
  }
  onSubmit(loginform:FormGroup){
   
    this.http.post<any>(this.URL+'Login',loginform.value).subscribe(data =>{
       if(data.results){
        localStorage.setItem('JWT_Token',data.results);
        this.jwt= jwt_decode(data.results);
        if(this.jwt.userType == "admin"){
          this.router.navigate(['superadmin/officer']);
        }else if(this.jwt.userType == "officer"){
          this.router.navigate(['officer/architecture']);
        }else if(this.jwt.userType == "user"){
           this.router.navigate(['normaluser/payments']);
        }else{
          this.router.navigate(['auth/signin']);
        }
       }else{
          this.verifConnexion = true;
          this.router.navigate(['auth/signin']);
        }
   
    });
 
  }
  ngOnInit() {
  }
  onBtnLoader() {
    this.btnLoader = true;
    setTimeout(() => {
      this.btnLoader = false;
    }, 2000);
  }
}
