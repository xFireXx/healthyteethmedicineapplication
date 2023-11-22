import { Component } from '@angular/core';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(public registerService: RegisterService) {}

  isSignedIn = false;

  async onSignup(email: string, password: string) {
    await this.registerService.signup(email, password);
    if (this.registerService.isLoggedIn) this.isSignedIn = true;
  }
}
