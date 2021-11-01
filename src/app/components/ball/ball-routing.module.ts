import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/core/guards/auth-guard.service';
import { PageNotfoundComponent } from '../page-notfound/page-notfound.component';
import { NewEditBallComponent } from './add-ball/new-edit-ball.component';
import { BallsListComponent } from './balls-list.component';



const routes: Routes = [
  { path: '', component: BallsListComponent, canActivate: [AuthGuardService]},
  { path: 'addBall', component: NewEditBallComponent },
  { path: 'editBall', component: NewEditBallComponent },
  { path: '**', component: PageNotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BallRoutingModule { }
