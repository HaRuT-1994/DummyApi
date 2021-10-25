import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../auth-form.scss']
})
export class SignUpComponent implements OnInit {
  user: User = new User('', '', 'finconstruct@gmail.com', '', '', Date.now() );

  constructor(private router: Router) { }

  ngOnInit(): void {
  
  }

  onSignUp() {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    console.log(users)
    users.push(this.user);
    localStorage.setItem(`users`, JSON.stringify(users));
    this.router.navigate(['/login']);
  }
}
