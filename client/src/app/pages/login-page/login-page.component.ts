import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user) this.router.navigate(['home']);
  }

  handleSubmit () {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.auth.login(email!, password!).subscribe({
        next: user => {
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['home']);
        },
        error: error => {
          this.errorMessage = error.error;
        }
      })
    }
  }

  get email () {return this.loginForm.get('email')};

  get password () {return this.loginForm.get('password')};

}
