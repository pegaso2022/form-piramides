import { AuthService } from '../Services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authToken='dasjhdkjas'
    this.auth.getAuthorizationToken().subscribe({
      next: token =>{ console.log(token) }
    })
    
    const authReq = request.clone({ setHeaders: { Authorization: authToken } });
    return next.handle(authReq);
  }
}
