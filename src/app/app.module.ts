import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './user.service';
import { UserRegisterComponent } from './user-register/user-register.component';
import {ShowHidePasswordModule} from 'ngx-show-hide-password';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    ShowHidePasswordModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AngularFirestore, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
