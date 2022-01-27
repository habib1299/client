import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = localStorage.getItem("JWT_Token");
    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8; multipart/form-data; boundary=<calculated when request is sent>',
        'Accept'       : 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
    });

    return next.handle(req);
  }
}