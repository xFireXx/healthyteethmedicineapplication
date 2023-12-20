import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-password-input',
  template: `
  <div>
    <label>
      {{ label }}
      <nz-input-group [nzSuffix]="suffixTemplate">
        <input
          [type]="inputType"
          [(ngModel)]="password"
          nz-input
          (keydown)="validatePassword()"
          [placeholder]="placeholder"
          [(ngModel)]="password"
          [ngClass]="customClass"
        />
        <button class="clearButton" (click)="clearPassword()">X</button>
      </nz-input-group>
      <ng-template #suffixTemplate>
        <span
          nz-icon
          [nzType]="passwordVisible ? 'eye-invisible' : 'eye'"
          (click)="togglePasswordVisibility()"
        ></span>
        
      </ng-template>
      <div class="errorCapslock" *ngIf="capsLockOn">
        Masz włączonego capslocka
      </div>
      <div class="errors" *ngIf="passwordError">{{ passwordError }}</div>
    </label>
    <div class="errors"></div>
  </div>
  `, 
  styles: [
    `
    .errorCapslock {
      color: red;
  }
  
  .clearButton {
      background: transparent;
      border: 0;
  }
  .input-form {
    height: 50px;
}`
  ]
})
export class PasswordInputComponent {
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
