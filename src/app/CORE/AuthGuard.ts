import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
    
  }
  canActivate() {
    if(this.getToken()){
      return true;
    }else{
        this.router.navigate(['auth/signin']);
        
      return false;
    }
  }

  getToken(){
     return !!localStorage.getItem('JWT_Token');
  }
}
