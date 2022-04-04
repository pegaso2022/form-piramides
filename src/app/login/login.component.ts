import { AuthService } from './../Services/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RestService } from '../Services/rest.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  data = new FormGroup({
    user : new FormControl(null,Validators.required),
    password : new FormControl(null,Validators.required),
  })
  constructor(private http:RestService, private router:Router, private auth:AuthService) { }

  ngOnInit(): void {
    
  }
  login(){
    if(this.data.invalid){
      return false;
    }
    const url = `${environment.urlService}:4001/servicio_autentificacion`
    const body = {
      p_portal_username:this.data.get('user')?.value,
      p_pwd: this.data.get('password')?.value
    }
    this.http.login(url,body)
    .subscribe({
      next: (res)=>{
        this.auth.addAuthorizationToken(res.token)
        this.router.navigate(['edit-client'])
      },
      error: (err => {
        console.log(err.response)
      })
    })
    
    return false
  }

}
