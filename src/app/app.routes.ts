// import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { MenuViewComponent } from './components/menu-view/menu-view.component';
import { Routes } from '@angular/router';
import { DeliveryBoyComponent } from './components/delivery-boy/delivery-boy.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path:'menu',
        component: MenuViewComponent,
        children : [
            {
                path : 'customer',
                component : CustomerComponent
            },
            {
                path : 'deliveryBoy',
                component : DeliveryBoyComponent
            }
        ]
    }
];

