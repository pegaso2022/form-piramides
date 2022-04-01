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
  constructor(private RestService:RestService) { }

  ngOnInit(): void {
  }
  auth(){
    
    if(this.data.invalid){
      return false;
    }
    console.log(this.data.get('user')?.value, this.data.get('password')?.value)
    return false
  }

  change(e:any){
    
  }
}
