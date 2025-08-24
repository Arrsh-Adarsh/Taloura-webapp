import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  title!: string;

  routerToolbar = [
    { path: 'home', label: 'Explore' },
    { path: 'home', label: 'WriteUp' },
    { path: 'home', label: 'Library' },
    { path: 'profile', label: 'Profile' },
  ];

  routerProfile = [
    { path: 'home', label: 'Explore' },
    { path: 'home', label: 'WriteUp' },
    { path: 'home', label: 'Library' },
    { path: 'profile', label: 'Profile' },
  ];

  routerButton = [
    { path: 'user/login', label: 'Login' },
    { path: 'user/signup', label: 'SignUp' },
  ];
}
