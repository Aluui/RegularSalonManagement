import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AddClientComponent } from './components/clients/add-client/add-client.component';
import { ClientDetailsComponent } from './components/clients/client-details/client-details.component';
import { AuthGuard } from './guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clients',
    component: ClientsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clients/add-client',
    component: AddClientComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clients/client-details/:id',
    component: ClientDetailsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
