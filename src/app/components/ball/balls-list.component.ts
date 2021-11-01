import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BallModel } from 'src/app/core/model/ball.model';
import { BallService } from 'src/app/core/services/ball.service';

@Component({
  selector: 'app-balls-list',
  templateUrl: './balls-list.component.html',
  styleUrls: ['./balls-list.component.scss']
})
export class BallsListComponent implements OnInit {
  
  balls: BallModel[] = [];
  showSetting = false;
  count: any;
  isLoading = false;

  constructor( private ballService: BallService, private router: Router) { }

  ngOnInit(): void {    
    this.getBalls();
  }

  addBall() {
    this.router.navigate(["ball/addBall"]);
    this.ballService.editBall = null;
  }

  getBalls() {
    this.isLoading = true;
    this.ballService.getBalls().subscribe( res => {
      this.balls = res;
      this.isLoading = false;
    });
  }

  toggleSettings(i) {
    if(this.count !== i) {
      this.count = i;
      this.showSetting = true;
    } else {
      this.showSetting = false;
    }
  }

  goToEdit(i) {
    this.ballService.goToEdit(i);
    this.showSetting = false;
  }

  onDeleteItem(i) {
    this.isLoading = true;
    this.ballService.deleteItem(i).subscribe(
      res => {
        this.balls.splice(i, 1)
        this.isLoading = false;
      },
      err => {
        alert(err.name);
        this.isLoading = false;
      }
    );
    this.showSetting = false;
    this.count = undefined;
  }
}
