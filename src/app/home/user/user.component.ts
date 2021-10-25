import { Component, Input, OnChanges, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { UserData } from '../interface/userData.interface';
import { DummyapiService } from '../services/dummyapi.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() id = '';
  @Input() user!: any;
  @Input() modalVisible;
  @Output() handleEvent = new EventEmitter<boolean>();

  constructor(private dummyapi: DummyapiService) { }

  // ngOnChanges(changes: SimpleChanges): void {
  //     console.log(changes, this.modalVisible);
  // }

  visibleModal(e: boolean) {
    this.modalVisible = e;
    this.user = undefined;
    // console.log(11, this.modalVisible);
    this.handleEvent.emit(this.modalVisible);
  }

}
