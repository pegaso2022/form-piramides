import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

export interface IMenu {
  id: number;
  name: string;
  active: boolean;
  url: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menu : Array<IMenu> = [];
  status : boolean = false;
  i =0;
  
  constructor() { }

  ngOnInit(): void {
    this.fillSidebar();
  }
  fillSidebar():void {
    this.menu =[
      {id: 1, name: 'Home', active: false, url:"/login"},
      {id: 2, name: 'Editar Cliente',  active: false, url:"/edit-client"},
      {id: 3, name: 'Nueva Cotizacion',  active: false, url:""},
    ]
  }
  sumitMenu(elemt: IMenu):void {

    if(elemt.active != true){
      this.fillSidebar();
      this.menu = this.menu.map((item) => {
        if(item.id === elemt.id) {
          item.active = !elemt.active;
        }
        return item;
      })
    }

  }
}
