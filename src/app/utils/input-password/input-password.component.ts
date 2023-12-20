import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent {
  @Input() label = 'Password';
  @Input() enableCapsLockCheck = false;
  @Input() lengthPassword?: number;
  @Input() placeholder = 'Wpisz hasło';
  @Input() customClass = 'input-form';
  @Output() passwordChange = new EventEmitter<string>();

  private _password: string = '';
  passwordVisible: boolean | undefined;

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
    this.passwordChange.emit(value);
  }

  capsLockOn = false;
  inputType: 'password' | 'text' = 'password';
  passwordError: string | null = null;

  @HostListener('window:keydown', ['$event'])
  checkCapsLock(event: KeyboardEvent): void {
    if (this.enableCapsLockCheck) {
      this.capsLockOn = event.getModifierState && event.getModifierState('CapsLock');
    }
  }

  validatePassword() {
    if (!!this.password && !!this.lengthPassword) {
      const passwordLength = this.password.length;
      if (passwordLength > this.lengthPassword) {
        this.passwordError = `Hasło nie może być dłuższe niż ${this.lengthPassword} znaków`;
      } else {
        this.passwordError = "";
      }
    }
  }

  clearPassword() {
    this.password = '';
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  
    if (this.passwordVisible) {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }
}
