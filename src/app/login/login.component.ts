import { Component, ViewChild } from '@angular/core';
import { LoginService } from './services/login.service';
import { InputPasswordComponent } from '../utils/input-password/input-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public firebaseService: LoginService) {}

  isSignedIn = false;

  password = '';

  onPasswordChange(password: string) {
    this.password = password;
  }
  
  async onSignin(email: string, password: string) {
    await this.firebaseService.signin(email, password);
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true;
    }
  }

  signInWithGoogle() {
    this.firebaseService.googleSignIn();
  }
}
