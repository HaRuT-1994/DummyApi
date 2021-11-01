import { Injectable } from "@angular/core";
import { CanLoad, Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class LoadGuardService implements CanLoad {
  constructor(private router: Router) {
  }
 
  canLoad(): boolean {
    if (!localStorage.getItem('user')) {
      return false;
    }
    return true;
  }
}