import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../core/model/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../auth-form.scss']
})
export class SignUpComponent implements OnInit {
  user: User = new User('', 'finconstruct@gmail.com', '', '', Date.now() );
  items: Observable<any[]>;
  isSignedIn = false;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    if(localStorage.getItem('user') !== null)
      this.isSignedIn = true;
    else
      this.isSignedIn = false;
  }

  async onSignUp () {
    await this.authService.signup(this.user.firstname, this.user.email, this.user.password);
    if(this.authService.isLoggedIn)
      this.isSignedIn = true;
      this.router.navigate(['home']);
  }
}
