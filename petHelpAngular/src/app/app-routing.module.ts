import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './views/alerts/alerts.component';
import { CreatePostComponent } from './views/create-post/create-post.component';
import { HomeComponent } from './views/home/home.component';
import { AuthGuard } from "./auth.guard";
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ProfileComponent } from './components/profile/profile.component';
import {LoginActivateGuard} from './guard/login-activate.guard'
import { PetComponent } from './components/pet/pet.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'alerts', component: AlertsComponent
  },
  {
    path: 'pet/:id', component: PetComponent
  },
  {
    path: 'alerts/createAlert', component: CreatePostComponent, canActivate: [AuthGuard]
  },
  { 
    path: 'sign-in', component: SignInComponent, canActivate: [LoginActivateGuard]
  },
  { 
    path: 'sign-up', component: SignUpComponent 
  },
  {
     path: 'forgot-password', component: ForgotPasswordComponent
  },
  {
     path: 'email-verification', component: VerifyEmailComponent 
  },
  {
    path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

