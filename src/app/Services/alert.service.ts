import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  alert(title:string, message:string,icon:any):void{
    Swal.fire({
      title: title,
      text: message,
      icon: icon
    })
  }
}
