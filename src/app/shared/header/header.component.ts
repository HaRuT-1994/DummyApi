import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public loggedUser;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.replaySubject$.subscribe(res => this.loggedUser = res);
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}