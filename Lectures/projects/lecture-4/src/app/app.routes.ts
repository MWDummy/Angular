import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Dashboard2 } from './dashboard2/dashboard2';
import { Admin } from './admin/admin';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard },
    { path: 'dashboard2', component: Dashboard2 },
    { path: 'admin', component: Admin }
    
];