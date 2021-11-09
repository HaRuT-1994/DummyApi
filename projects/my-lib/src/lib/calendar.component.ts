import { Component, ViewEncapsulation } from '@angular/core';
import { CalendarService } from './calendar.service';
import { MonthData } from './monthData.interface';

@Component({
  selector: 'lib-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent {
  title = 'calendar';
  showCalendar = false;
  toggleBody = false;
  selectYear = false;
  selectedDate = '';
  newVal = '';
  year = new Date().getFullYear();
  getYears: Array<number> = [];
  getMonths: Array<string> = [];
  monthData: MonthData = {
    daysInMonth: [],
    whichMonth: '',
    whichDay: 0,
    whichYear: 2021,
    firstdayInMonth: 0
  };

  constructor(private calendarService: CalendarService) { }

  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
    this.selectYear = false;
    this.toggleBody = false;

    if (this.showCalendar) {
      if (this.newVal) {
        this.calendarService.selectedDate = this.newVal;
      }
      this.monthData = this.calendarService.renderCalendar();
    }
  }

  onToggleBody() {
    this.toggleBody = !this.toggleBody;
    this.selectedDate = '';

    this.selectYear = false;
    if (this.toggleBody) {
      this.getYears = this.calendarService.getYears();
    }
  }

  onSelectYear(year: number) {
    this.year = this.getYears[year];
    this.selectedDate = this.selectedDate + ' ' + this.year;
    this.selectYear = !this.selectYear;
    this.getMonths = this.calendarService.months;
    this.calendarService.year = this.year;
  }

  onSelectMonth(month: number) {
    this.selectedDate = this.getMonths[month] + this.selectedDate;
    this.calendarService.selectedDate = this.selectedDate;
    this.onToggleBody();
    this.monthData = this.calendarService.renderCalendar();
  }

  leftArrow() {
    if (this.showCalendar && !this.toggleBody) {
      this.calendarService.leftArrow();
      this.monthData = this.calendarService.renderCalendar();
    }
    if (this.toggleBody && !this.selectYear) {
      this.calendarService.leftArrow(1);
      this.getYears = this.calendarService.getYears();
    }
    if (this.selectYear) {
      this.calendarService.leftArrow(2);
      this.year = this.calendarService.year;
    }
  }

  rightArrow() {
    if (this.showCalendar && !this.toggleBody) {
      this.calendarService.rightArrow();
      this.monthData = this.calendarService.renderCalendar();
    }
    if (this.toggleBody && !this.selectYear) {
      this.calendarService.rightArrow(1);
      this.getYears = this.calendarService.getYears();
    }
    if (this.selectYear) {
      this.calendarService.rightArrow(2);
      this.year = this.calendarService.year;
    }
  }

  newValue(day: number) {
    this.selectedDate = this.calendarService.selectedDate;
    
    if(this.selectedDate.length > 8) {
      let splitSelected = this.selectedDate.split(' ');
      const newSelectedDate = day + ' ' + splitSelected[1] + ' ' + splitSelected[2] ;
      this.newVal = newSelectedDate;
    } else {
      this.newVal = day + ' ' + this.selectedDate;
    }
    this.showCalendar = false;
  }
}
