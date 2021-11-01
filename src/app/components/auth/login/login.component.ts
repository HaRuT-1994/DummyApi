import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { DummyapiService } from 'src/app/core/services/dummyapi.service';
import { Login } from '../../../core/model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth-form.scss']
})
export class LoginComponent {
  user: Login = new Login('', '');
  loading = false;
  isSignedIn = false;

  constructor(private router: Router, private authService: AuthService) { }

  async onLogin () {
    await this.authService.signin(this.user.email, this.user.password);
    if(this.authService.isLoggedIn)
      this.isSignedIn = true;
      this.router.navigate(['home']);
  }
}
