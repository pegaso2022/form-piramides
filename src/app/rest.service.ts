import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


export interface Rest {
  serviceUrl: string,
  portUrl: number,
  response: any
}

@Injectable({
  providedIn: 'root'
})
export class RestService {
    
  constructor(private http: HttpClient, private auth: AuthService) { }
  
  login(url:string, data:{}){
    return this.http.post(url,data)
  }
}
