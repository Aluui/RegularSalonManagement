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
import { ScheduleComponent } from './components/schedule/schedule.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

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
        ScheduleComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        })
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
