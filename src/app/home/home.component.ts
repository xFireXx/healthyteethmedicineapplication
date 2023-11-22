import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from '../login/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>();

  constructor(public firebaseService: LoginService, private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null) {
      this.router.navigate(['/home'])
    } else {
      this.router.navigate(['/login'])
    }
  }

  logout() {
    this.firebaseService.logout();
    this.router.navigate(['/login'])
    this.isLogout.emit();
  }
}
