import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { IndexComponent } from './index/index.component';
import { NewCotizationComponent } from './new-cotization/new-cotization.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EditClientComponent } from './edit-client/edit-client.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FormComponent,
    IndexComponent,
    NewCotizationComponent,
    SidebarComponent,
    EditClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
