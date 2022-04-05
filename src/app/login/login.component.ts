import { AlertService } from './../Services/alert.service';
import { AuthService } from './../Services/auth.service';
import { Router } from '@angular/router';
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
  constructor(private http:RestService, private router:Router, private auth:AuthService, private alert:AlertService) { }

  ngOnInit(): void {
    
  }
  login(){
    if(this.data.invalid){
      return false;
    }
    const port = 4001
    const url = `servicio_autentificacion`
    const body = {
      p_portal_username:this.data.get('user')?.value,
      p_pwd: this.data.get('password')?.value
    }
    this.http.login(port, url,body)
    .subscribe({
      next: (res)=>{
        console.log(res)
        this.auth.addAuthorizationToken(res.token)
        this.router.navigate(['edit-client'])
      },
      error: (err => {
        if(err.error.code){
          if(err.error.code===400){
            this.alert.alert(err.error.error, 'Usuario no registrado', 'error')
          }else{
            this.alert.alert(err.error.error, err.error.message, 'error')
          }
        }else{
          this.alert.alert('Error de consulta', 'Error al conectarse con el servidor, verifique su conexión a internet', 'error')
        } 
      })
    })
    
    return false
  }

}
