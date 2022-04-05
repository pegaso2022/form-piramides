import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class RestService {
  private readonly urlService = environment.urlService;
  constructor(private http: HttpClient) { }
  
  login(port:number, url:string, body:{}):Observable<any>{
    return this.http.post(`${this.urlService}:${port}/${url}`,body)
  }
  req(port:number, url:string, body:{}):Observable<any>{
    return this.http.post(`${this.urlService}:${port}/${url}`,body)
  }  
}
