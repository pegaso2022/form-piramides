import { environment } from 'src/environments/environment';
import { RestService } from './../rest.service';
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
  constructor(private http:RestService) { }

  ngOnInit(): void {
    
  }
  auth(){
    
    if(this.data.invalid){
      return false;
    }
    const url = `${environment.urlService}:4001/servicio_autentificacion`
    const body = {
      p_portal_username:this.data.get('user')?.value,
      p_pwd: this.data.get('password')?.value
    }
    this.http.login(url,body)
    .subscribe(d=>{
      localStorage.setItem('auth',d.token)
    })
    return false
  }

}
