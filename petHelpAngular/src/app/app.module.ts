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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './views/home/home.component';
import { AlertsComponent } from './views/alerts/alerts.component';
import { CreatePostComponent } from './views/create-post/create-post.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }