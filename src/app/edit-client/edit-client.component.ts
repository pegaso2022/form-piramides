import { AuthService } from '../Services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestService } from '../Services/rest.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface profetion{
  title: string,
  value: string
}


@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  profetionList: profetion[]
  
  states = []

  document = new FormGroup({
    p_identification_type : new FormControl(null,Validators.required),
    p_identification_number: new FormControl(null,Validators.required)
  });
  data = {
  "IDPER": "",
  "TIPOID": "",
  "NUMID": "",
  "DVID": "",
  "NOMTER": "",
  "APETER1": "",
  "APETER2": "",
  "NOMTER1": "",
  "NOMTER2": "",
  "APETER": "",
  "CODPAIS": "",
  "CODESTADO": "",
  "CODCIUDAD": "",
  "CODMUNICIPIO": "",
  "CODURBANIZACION": "",
  "ZIP": "",
  "AVENIDA": "",
  "EDIFICIO": "",
  "PISO": "",
  "TLFLOCAL": "",
  "TLFMOVIL": "",
  "EMAIL": "",
  "NUMPASAPORTE": "",
  "CODCLI": "",
  "SEXO": "",
  "FECNAC": "",
  "EDOCIVIL": "",
  "PESO": "",
  "ESTATURA": "1.87",
  "MTOINGMEN": "",
  "INDDOMHO": "",
  "CODACT": "",
  "CODPAISORIG": "",
  "INDNACIONAL": "",
  }
    
  constructor(private http:RestService, private auth: AuthService) { 
    this.profetionList = [{title: '...', value:''}]
   }

  ngOnInit(): void { 
    /* let url = `${environment.urlService}:/4014/`
    const bodyProfetions = {
    }

    this.http.req(url, bodyProfetions, {headers: this.auth})
    .subscribe(res => {
      console.log(res)
    }) 


    url = `${environment.urlService}:/4014/`
    const bodyStates = {

    }
    this.http.req(url, bodyStates, {headers: this.auth})
    .subscribe(res => {
      console.log(res)
    }) */
    
  }

  query(){
    if(this.document.invalid){
      return false;
    }
    const url = `${environment.urlService}:4001/servicio_autentificacion`
    const body = {
      p_identification_type:this.document.get('p_identification_type')?.value,
      p_identification_number: this.document.get('p_identification_number')?.value,
      p_identification_verified: 0
    }
    this.http.login(url,body)
    .subscribe(res=>{
      localStorage.setItem('auth',res.token)
    })
    return false
  }
  hola(){
    console.log('hola')
  }
}
