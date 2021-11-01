import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BallModel } from 'src/app/core/model/ball.model';
import { BallService } from 'src/app/core/services/ball.service';

@Component({
  selector: 'app-new-edit-ball',
  templateUrl: './new-edit-ball.component.html',
  styleUrls: ['./new-edit-ball.component.scss']
})
export class NewEditBallComponent {
  ball: BallModel = {
    color: '',
    material: '',
    useType: '',
    shape: ''
  };
  isLoading = false;
  isOnEdit = false;

  constructor(private router: Router,
    private ballService: BallService) { }

  ngOnInit() {
    const existingBall = this.ballService.editBall;
    if (existingBall) {
      this.isOnEdit = true;
      this.ball = existingBall;
    } 
  }

  addBall() {
    this.isLoading = true;
    this.ballService.addBall(this.ball).subscribe(
      res => {
        this.isLoading = false;
        this.router.navigate(['ball']);
      },
      err => {
        alert(err.name);
        this.isLoading = false;
      }
    );
  }

  editBall() {
    this.isLoading = true;
    this.ballService.oneditBall(this.ball).subscribe(
      (res) => {
        this.isLoading = false;
        this.router.navigate(['/ball']);
      },
      (err) => {
        alert(err.name);
        this.isLoading = false;
      }
    );
  }
}
