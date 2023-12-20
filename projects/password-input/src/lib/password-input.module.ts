import { NgModule } from '@angular/core';
import { PasswordInputComponent } from './password-input.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common'; 

@NgModule({
  declarations: [
    PasswordInputComponent
  ],
  imports: [
    NzInputModule,
    NzButtonModule,
    NzGridModule,
    FormsModule,
    NzIconModule,
    CommonModule
  ],
  exports: [
    PasswordInputComponent
  ]
})
export class PasswordInputModule { }
