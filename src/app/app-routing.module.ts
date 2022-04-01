import { NewCotizationComponent } from './new-cotization/new-cotization.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: NewCotizationComponent},
  {path: 'edit-client', component: EditClientComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
