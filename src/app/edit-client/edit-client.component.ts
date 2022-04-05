import { AlertService } from './../Services/alert.service';
import { AuthService } from '../Services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestService } from '../Services/rest.service';
import { Component, OnInit } from '@angular/core';

export interface profetion{
  DESCRIPCION: string,
  VALOR: string
}

export interface state{
  CODESTADO: string,
  DESCESTADO: string
}

export interface city{
  CODCIUDAD: string,
  DESCCIUDAD: string,
}

export interface municipality{
  CODMUNICIPIO: string,
  DESCMUNICIPIO: string
}
export interface urb{
  CODIGO: string,
  DESCZONAPOSTAL: string,
  ZONAPOSTAL: string,
}

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  private stateSelected = '';
  private citySelected = '';
  private munSelected = ''
  profetionList:profetion[] = []
  statesList:state[] = []
  cityList:city[] = []
  municipalityList:municipality[] = []
  urbList:urb[] = []
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
    
  constructor(private http:RestService, private auth: AuthService, private alert: AlertService) { 
  }

  ngOnInit(): void { 
    const bodyProfetions = {
      p_list_code: "CODACT"
    }

    this.http.req(4009, 'Lista_Profesiones', bodyProfetions)
    .subscribe(res => {
      this.profetionList=res.data.p_cursor
    }) 
    const bodyStates = {
      p_country_id: "001"
    }
    this.http.req(4010, 'Lista_Estados', bodyStates)
    .subscribe(res => {
      this.statesList=res.data.p_cursor
    })
    
  }

  changeCitie(e:any){
    this.stateSelected = e.target.value;
    const body = {
      p_country_id: "001",
      p_state_id: this.stateSelected
    }

    this.http.req(4011, 'Lista_Ciudades', body)
    .subscribe(res => {
      this.cityList=res.data.p_cursor
    }) 
    this.municipalityList = []
    this.urbList=[]
  }
  changeMunicipality(e:any){
    this.citySelected = e.target.value
    const body = {
      p_country_id: "001",
      p_state_id: this.stateSelected,
      p_city_id: this.citySelected
    }

    this.http.req(4012, `Lista_Municipios`, body)
    .subscribe(res => {
      this.municipalityList=res.data.p_cursor
    }) 
    this.urbList=[]
  }
  changeUrb(e:any){
    this.munSelected = e.target.value
    const body = {
      p_country_id: "001",
      p_state_id: this.stateSelected,
      p_city_id: this.citySelected,
      p_municipality_id: this.munSelected
    }
    this.http.req(4013, 'Lista_Codigo_Postal', body)
    .subscribe(res => {
      this.urbList=res.data.p_cursor
    }) 
  }

  query(){
    if(this.document.invalid){
      return false;
    }
    const body = {
      p_identification_type: `${this.document.get('p_identification_type')?.value}`,
      p_identification_number: `${this.document.get('p_identification_number')?.value}`,
      p_identification_verified: 0
    }
    this.http.req(4008,'cliente_emitiendo_cotizacion',body)
    .subscribe({
      next: (res)=>{
        console.log(res)
        this.data= res.data.p_cursor[0]
        const body = {
          p_country_id: "001",
          p_state_id: res.data.p_cursor[0].CODESTADO,
          p_city_id: res.data.p_cursor[0].CODCIUDAD,
          p_municipality_id: res.data.p_cursor[0].CODMUNICIPIO
        }
        console.log(body)
        this.http.req(4011, 'Lista_Ciudades', body)
        .subscribe(res2 => {
          console.log(res2)
          this.cityList=res2.data.p_cursor
        })
        this.http.req(4012, `Lista_Municipios`, body)
        .subscribe(res3 => {
          console.log(res3)
          this.municipalityList=res3.data.p_cursor
        }) 
        this.http.req(4013, 'Lista_Codigo_Postal', body)
        .subscribe(res4 => {
          console.log(res4)
          this.urbList=res4.data.p_cursor
        }) 

      },
      error: (err => {
        if(err.error.code){
          if(err.error.code===400){
            this.alert.alert(err.error.error, 'Cliente no encontrado', 'error')
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
