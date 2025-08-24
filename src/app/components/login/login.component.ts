import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tabName = 'Login';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.tabName = event.url === '/user/login' ? 'Login' : 'Sign Up';
      }
    });
  }
}
