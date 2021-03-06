import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

// Librerias de Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Import de las enviroment de firebase
import { environment } from 'src/environments/environment'

// Import Forms reactive
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './views/home/home.component';
import { AlertsComponent } from './views/alerts/alerts.component';
import { CreatePostComponent } from './views/create-post/create-post.component';
import { LoginComponent } from './views/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { CarrouselComponent} from './components/carrousel/carrousel.component'


import { AuthService } from "./service/auth/auth.service";
import { FirestoreService } from './service/firestore/firestore.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

//import { AgmCoreModule } from '@agm/core';
import { GoogleMapsModule } from '@angular/google-maps'

import { PetComponent } from './components/pet/pet.component';
import { UpdateComponent } from './components/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SideMenuComponent,
    FooterComponent,
    ProfileComponent,
    HomeComponent,
    AlertsComponent,
    CreatePostComponent,
    LoginComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    CarrouselComponent,
    PetComponent,
    UpdateComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    GoogleMapsModule
 ///   AgmCoreModule.forRoot({
 ///     apiKey: 'AIzaSyBUZaybfOzGwAlv_R9JOLp8CHMr0r2IZBY'
 ///   })
  ],
  providers: [AuthService, FirestoreService],
  bootstrap: [AppComponent],
})
export class AppModule { }