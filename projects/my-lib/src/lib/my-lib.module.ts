import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './calendar.component';
import { DayMarkDirective } from './dayMark.directive';



@NgModule({
  declarations: [
    CalendarComponent,
    DayMarkDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CalendarComponent
  ]
})
export class MyLibModule { }
