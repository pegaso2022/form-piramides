import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token$: Subject<any>;
  constructor(){ 
    this.token$ = new Subject(); 
  }
  
  addAuthorizationToken(token:any){
    localStorage.setItem('auth', token)
    this.token$.next(token)
  }

  getAuthorizationToken():Observable<any>{
    return this.token$.asObservable()
  }

  deleteAuthorizationToken(){
    localStorage.removeItem('auth')
    this.token$.next(null)
  }
}
