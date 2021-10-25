import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nz-modal-basic',
  template: `
    <nz-modal [(nzVisible)]="isVisible" nzTitle="The first Modal"  (nzOnCancel)="handleCancel()" (nzOnOk)="handleOk()">
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
  @Input() isVisible = false;
  @Output() handleEvent = new EventEmitter<boolean>();

  constructor() {}
 
  handleCancel(): void {
    this.isVisible = false;
    this.handleEvent.emit(this.isVisible);
  }

  handleOk(): void {
    this.isVisible = false;
    this.handleEvent.emit(this.isVisible);
  }
}