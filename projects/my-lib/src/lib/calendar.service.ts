import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CalendarService {
  private date: Date = new Date();
  private daysOfMonth: number[] = [];
  public months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  private month = 0;
  public year = 2021;
  public selectedDate = this.date.getDate() + ' ' + this.months[this.date.getMonth()] + ' ' + this.date.getFullYear();

  constructor() {
    for (let i = 1; i <= 27; i++) {
      this.daysOfMonth.push(i);
    }
  }

  renderCalendar() {    
    this.date = new Date(this.selectedDate);
    const monthDays = this.getDaysInMonth();
    this.month = this.date.getMonth();
    let fillMonthDays = [...this.daysOfMonth];

    for (let day = 28; day <= monthDays; day++) {
      fillMonthDays.push(day);
    }

    const exportData = {
      daysInMonth: fillMonthDays,
      whichMonth: this.months[this.month],
      whichDay: this.date.getDate(),
      whichYear: this.date.getFullYear(),
      firstdayInMonth: this.getFirstdayInMonth(),
    }
    return exportData
  }

  getDaysInMonth(): number {
    return new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
  }

  getFirstdayInMonth(): number {
    return new Date(`${this.date.getMonth() + 1} 1, ${this.date.getFullYear()}`).getDay();
  }


  getYears(): Array<number> {
    this.year = this.date.getFullYear();
    let yearsArr = [];
    for (let i = this.year - 12; i <= this.year + 12; i++) {
      yearsArr.push(i);
    }

    return yearsArr;
  }

  leftArrow(arrowCase?: number) {
    switch (arrowCase) {
      case 1:
        this.year = this.year - 25;
        this.date = new Date(this.months[this.month] + this.year);
        break;
      case 2:
        --this.year;
        break;
      default:
        --this.month;
        this.year = this.date.getFullYear();
        if (this.month === -1) {
          this.month = 11;
          --this.year;
        }
        this.selectedDate = this.months[this.month] + ' ' + this.year;
        break;
    }
  }

  rightArrow(arrowCase?: number) {
    switch (arrowCase) {
      case 1:
        this.year = this.year + 25;
        this.date = new Date(this.months[this.month] + this.year);
        break;
      case 2:
        ++this.year;
        break;
      default:
        ++this.month;
        this.year = this.date.getFullYear();
        if (this.month === 12) {
          this.month = 0;
          this.year++;
        }
        this.selectedDate = this.months[this.month] + ' ' + this.year;
        break;
    }
  }
}
