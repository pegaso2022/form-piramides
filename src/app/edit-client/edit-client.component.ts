import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  
  data = {
  "IDPER": 212350,
  "TIPOID": "V",
  "NUMID": 11604787,
  "DVID": "0",
  "NOMTER": "Miguel Angel",
  "APETER1": "Castillo",
  "APETER2": "Hernandez",
  "NOMTER1": "Miguel",
  "NOMTER2": "Angel",
  "APETER": "CASTILLO HERNANDEZ",
  "CODPAIS": "001",
  "CODESTADO": "001",
  "CODCIUDAD": "002",
  "CODMUNICIPIO": "002",
  "CODURBANIZACION": "452",
  "ZIP": "1061",
  "AVENIDA": "Urb. Los Magallanes Calle Sucre",
  "EDIFICIO": "Urb. Los Magallanes Calle Sucre",
  "PISO": "10",
  "TLFLOCAL": "02124554545",
  "TLFMOVIL": "54554545454",
  "EMAIL": "micastillo@segurospiramide.com",
  "NUMPASAPORTE": "1111111111",
  "CODCLI": "00000011604787",
  "SEXO": "M",
  "FECNAC": "06/12/1974",
  "EDOCIVIL": "S",
  "PESO": 91,
  "ESTATURA": 1.87,
  "MTOINGMEN": 30000,
  "INDDOMHO": "S",
  "CODACT": "0108",
  "CODPAISORIG": "001",
  "INDNACIONAL": "N",
  }
    
  constructor() { }

  ngOnInit(): void {
  }

}
