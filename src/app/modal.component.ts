
import {Component, ElementRef, Input, ViewChild} from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  @ViewChild('closeBtn') closeButton: ElementRef;
  @Input() modalId = 'mymodal';

  constructor() {}

  public closeModal() {
    this.closeButton.nativeElement.click();
  }

}
