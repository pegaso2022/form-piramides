import { AuthService } from './Services/auth.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form_piramide';
  public token = localStorage.getItem('auth');
  constructor(private auth: AuthService){ 
  }

  ngOnInit():void{
    this.auth.getAuthorizationToken()
    .subscribe({
      next: res => this.token=res
    })
  }

}
