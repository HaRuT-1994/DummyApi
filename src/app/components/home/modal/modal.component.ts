import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../../../core/interface/userData.interface';

@Component({
  selector: 'nz-modal-basic',
  template: `
    <nz-modal [(nzVisible)]="modalVisible"  [nzTitle]="user ? user.title + ' ' + user.firstName + ' ' + user.lastName : ''" (nzOnCancel)="handleCancel()" (nzOnOk)="handleOk()">
      <ng-container *nzModalContent>
       <ng-content></ng-content>
      </ng-container>
    </nz-modal>
  `,
  styles: [`
    ::ng-deep .ant-modal {
      width: 700px !important;
    }
  `]
})
export class NzModalComponent {
  @Input() modalVisible = false;
  @Input() user: UserData;
  @Output() handleEvent = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  handleCancel(): void {
    this.onHandleEvent();
  }

  handleOk(): void {
    this.onHandleEvent();
  }

  onHandleEvent() {
    this.modalVisible = false;
    this.handleEvent.emit(this.modalVisible);
    this.router.navigate(['/home'])
  }
}