import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../../core/interface/userData.interface';
import { DummyapiService } from '../../core/services/dummyapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: Array<any> = [];
  userData: UserData;
  modalVisible: boolean;

  constructor(private dummyapi: DummyapiService, private router: Router) { }

  ngOnInit() {
    this.dummyapi.getAllUsers().subscribe(usersData => {
      this.users = usersData.data;
    });
  }

  getUser(id: string) {
    this.modalVisible = true;
    this.dummyapi.setUserId(id);
    this.dummyapi.getUser().subscribe((res) => {
      this.userData = res;
    });
    this.router.navigate(['home/user'])
  }

  visibleModal(e: boolean) {
    this.modalVisible = e;
  }
}
