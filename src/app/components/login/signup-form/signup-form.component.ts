import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
  signupForm!: FormGroup;

  hideP = true;
  hidePc = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userFullName: new FormControl(null),
      userId: new FormControl(null),
      userEmail: new FormControl(null),
      userMobile: new FormControl(null),
      userPassword: new FormControl(null),
      confirmPassword: new FormControl(null),
    });
  }

  signupSubmit() {
    console.log(this.signupForm.value);

    this.signupForm.reset();

    this.router.navigate(['/user/login']);
  }
}
