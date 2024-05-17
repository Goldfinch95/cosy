import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { SuccessComponent } from './pages/success/success.component';
import { ProfileComponent } from './pages/profile/profile.component';
import UsersProfileComponent from './pages/users-profile/users-profile.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'success',
        component: SuccessComponent
    },
    {
        path: 'home',
        component: HomeComponent,      
    },
    { path: 'profile/:id', component: UsersProfileComponent },
    {
        path: 'recovery',
        component: RecoveryComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
];
