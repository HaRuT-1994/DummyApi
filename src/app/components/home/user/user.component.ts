import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserData } from '../../../core/interface/userData.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user: UserData;
  @Input() modalVisible: boolean;
  @Output() handleEvent = new EventEmitter<boolean>();

  visibleModal(e: boolean) {
    this.modalVisible = e;
    this.user = undefined;
    this.handleEvent.emit(this.modalVisible);
  }

}
