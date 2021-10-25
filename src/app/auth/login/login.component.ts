import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth-form.scss']
})
export class LoginComponent implements OnInit {
  user: Login = new Login('', '');
  loading = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.loading = true;
    setTimeout(()=> {
      let users = JSON.parse(localStorage.getItem('users') || '[]');
      console.log(users);
      for (let user of users) {
        if(user.email === this.user.email && user.password === this.user.password) {
          this.loading = false;
          this.router.navigate(["/home"]);
          localStorage.setItem('loggedUser', user.id);
          break;
        }
      }

      if(this.loading) {
        alert('Oops, email or password is wrong!');
        this.loading = false;
      }
    }, 500)
    
  }
}
