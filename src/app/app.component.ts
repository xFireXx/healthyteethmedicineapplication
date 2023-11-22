import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'healthyteethmedicine';

  isSignedIn = false;

  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true;
      this.router.navigate(['/home'])
    } else {
      this.isSignedIn = false;
    }
  }


  handleLogout() {
    this.isSignedIn = false;
  }
}
