import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BallRoutingModule } from './ball-routing.module';
import { FormsModule } from '@angular/forms';

import { BallsListComponent } from './balls-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewEditBallComponent } from './add-ball/new-edit-ball.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppModule } from 'src/app/app.module';

@NgModule({
  declarations: [
    NewEditBallComponent,
    BallsListComponent
  ],
  imports: [
    CommonModule,
    BallRoutingModule,
    FormsModule,
    SharedModule
  ],
})
export class BallModule { }
