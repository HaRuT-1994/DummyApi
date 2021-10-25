import { Component, Input, OnInit } from '@angular/core';
import { DummyapiService } from './services/dummyapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: Array<any> = [];
  userData!: any;
  modalVisible: boolean;

  constructor(private dummyapi: DummyapiService) { }

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
  }

  visibleModal(e: boolean) {
    this.modalVisible = e;
    this.userData = undefined;
  }
}
