import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private readonly urlService = '';
  constructor(private http: HttpClient, private auth: AuthService) { }
  
  login(url:string, body:{}):Observable<any>{
    return this.http.post(url,body)
  }
  req(url:string, body:{}):Observable<any>{
    return this.http.post(url,body)
  }
}
