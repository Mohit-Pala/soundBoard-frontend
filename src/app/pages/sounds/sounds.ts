import { Component } from '@angular/core';
import { UploadNewSoundDialog } from '../../components/upload-new-sound-dialog/upload-new-sound-dialog';

@Component({
  selector: 'app-sounds',
  imports: [UploadNewSoundDialog],
  templateUrl: './sounds.html',
  styleUrl: './sounds.css'
})
export class Sounds {
  showUploadModal = false;

  openUploadModal() {
    this.showUploadModal = true;
  }

  closeUploadModal() {
    this.showUploadModal = false;
  }
}
