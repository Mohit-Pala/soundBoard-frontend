import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-upload-new-sound-dialog',
  imports: [],
  templateUrl: './upload-new-sound-dialog.html',
  styleUrl: './upload-new-sound-dialog.css'
})
export class UploadNewSoundDialog {
  @Output() closeModal = new EventEmitter<void>();

  cancelUpload() {
    console.log('upload dialog diddy - Cancel upload triggered');
    this.closeModal.emit();
  }

  confirmUpload() {
    console.log('upload dialog diddy - Confirm upload triggered');
  }

}
