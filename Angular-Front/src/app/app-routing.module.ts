import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AddClientComponent } from './components/clients/add-client/add-client.component';
import { ClientDetailsComponent } from './components/clients/client-details/client-details.component';
import { AuthGuard } from './guards/auth-guard.service';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ViewScheduleComponent } from './components/schedule/view-schedule/view-schedule.component';
import { AddAppointmentComponent } from './components/schedule/add-appointment/add-appointment.component';
import { NewServiceComponent } from './components/services/new-service/new-service.component';
import { ServiceListComponent } from './components/services/service-list/service-list.component';
import { ServiceDetailComponent } from './components/services/service-detail/service-detail.component';
import { EditServiceComponent } from './components/services/edit-service/edit-service.component';
import { DeleteServiceComponent } from './components/services/delete-service/delete-service.component';
import { EditclientComponent } from './components/clients/edit-client/editclient.component';
import { DeleteClientComponent } from './components/clients/delete-client/delete-client.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { DeleteProductComponent } from './components/products/delete-product/delete-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'signup',
        component: SignupComponent,
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'clients',
        component: ClientsComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'clients/add-client',
        component: AddClientComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'clients/client/:id',
        component: ClientDetailsComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'clients/client-edit/:id',
        component: EditclientComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'clients/client-delete/:id',
        component: DeleteClientComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'schedule',
        component: ViewScheduleComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'add-appointment',
        component: AddAppointmentComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'services',
        component: ServiceListComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'services/add-service',
        component: NewServiceComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'services/edit-service/:id',
        component: EditServiceComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'services/delete-service/:id',
        component: DeleteServiceComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'services/service/:id',
        component: ServiceDetailComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'products',
        component: ListProductsComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'products/add-product',
        component: AddProductComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'products/edit-product/:id',
        component: EditProductComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'products/delete-product/:id',
        component: DeleteProductComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'products/product/:id',
        component: ProductDetailsComponent,
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
