import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { appConfig } from "../appConfig";
import { map } from 'rxjs/operators';
import { Observable, of } from "rxjs";
import { BallModel } from "../model/ball.model";
import { Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class BallService {
  private balls: BallModel[] = [];
  private url = appConfig.api.firebase.baseUrl;
  private id = '';
  // private item;
  public editBall;
  public isLoading = false;

  constructor(private http: HttpClient, private router: Router) { }

  addBall(ball): Observable<any> {
    return this.http.post(this.url + 'posts.json', ball).pipe(map(
      (resData: any) => {
        this.balls.push({...ball, id: resData.name});
      }
    ))
  }

  getBalls(): Observable<any> {
    if(this.balls.length){
      return of(this.balls);
    }
    else{
      return this.http.get(this.url + 'posts.json').pipe(
        map( resData => {
          this.balls = [];
          for(const key in resData) {
            this.balls.push({ ...resData[key], id: key })
          }
          
          return this.balls;
        })
      )
    }
  }

  deleteItem(i): Observable<any> {
    this.id = this.balls[i].id;
    return this.http.delete<Observable<any>>(this.url + `posts/${this.id}.json`)
    
  }

  goToEdit(i) {
    this.id = this.balls[i].id;
    this.editBall = this.balls[i];
    this.router.navigate(['ball/editBall']);
  }

  oneditBall(ball): Observable<any> {
    this.isLoading = true;
    return this.http.patch(this.url + `posts/${this.id}.json`, ball)   
  }
    
}