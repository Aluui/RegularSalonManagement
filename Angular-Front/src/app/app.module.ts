import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AddClientComponent } from './components/clients/add-client/add-client.component';
import { GetClientComponent } from './components/clients/get-client/get-client.component';
import { ClientDetailsComponent } from './components/clients/client-details/client-details.component';
import { AuthGuard } from './guards/auth-guard.service';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EditclientComponent } from './components/clients/editclient/editclient.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AddAppointmentComponent } from './components/schedule/add-appointment/add-appointment.component';
import { ViewScheduleComponent } from './components/schedule/view-schedule/view-schedule.component';
import { NewServiceComponent } from './components/services/new-service/new-service.component';
import { EditServiceComponent } from './components/services/edit-service/edit-service.component';
import { ServiceDetailComponent } from './components/services/service-detail/service-detail.component';
import { DeleteServiceComponent } from './components/services/delete-service/delete-service.component';
import { ServiceListComponent } from './components/services/service-list/service-list.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        HomeComponent,
        ClientsComponent,
        AddClientComponent,
        GetClientComponent,
        ClientDetailsComponent,
        HeaderComponent,
        FooterComponent,
        EditclientComponent,
        ForgotPasswordComponent,
        AddAppointmentComponent,
        ViewScheduleComponent,
        NewServiceComponent,
        EditServiceComponent,
        ServiceDetailComponent,
        DeleteServiceComponent,
        ServiceListComponent
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
