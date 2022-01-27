import jwt_decode from "jwt-decode";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
@Injectable()
export class RedirectionServices{

    constructor(private router:Router, private http:HttpClient){}

    CheckUser(userType:string){
       var token = (localStorage.getItem('JWT_Token') || '{}');
       var decoded = jwt_decode(token);
       var tab = JSON.stringify(decoded);
       var output =JSON.parse(tab)
       if(output.userType!==userType){
            this.router.navigate(['/auth/signin']);
            localStorage.removeItem('JWT_Token');
       }
    }
}