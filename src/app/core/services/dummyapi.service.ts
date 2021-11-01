import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UsersData } from "../interface/usersData.interface";
import { UserData } from "../interface/userData.interface";
import { Observable } from "rxjs";
import { appConfig } from "src/app/core/appConfig";

@Injectable({providedIn: 'root'})
export class DummyapiService {
  url = appConfig.api.dummy.baseUrl;
  id: string = '';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<UsersData> {

    return this.http.get<UsersData>(this.url);
  }

  getUser(): Observable<UserData> {
    
    return this.http.get<UserData>(this.url + this.id);
  }

  setUserId(id: string) {
    this.id = id;
  }
}