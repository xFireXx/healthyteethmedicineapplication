import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginService } from './login/services/login.service';
import { RegisterService } from './register/services/register.service';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyATfKqIlQrZsplPL0EvCDGl_550uzqYibU',
      authDomain: 'healthyteethmedicine.firebaseapp.com',
      projectId: 'healthyteethmedicine',
      storageBucket: 'healthyteethmedicine.appspot.com',
      messagingSenderId: '680143151429',
      appId: '1:680143151429:web:324378f6916f33df8b1e2c',
    }),
    NzGridModule,
    NzButtonModule,
    NzInputModule,
    FormsModule,
  ],
  providers: [LoginService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
