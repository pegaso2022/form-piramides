import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getAuthorizationToken():any{
    return localStorage.getItem('auth');
  }
}
