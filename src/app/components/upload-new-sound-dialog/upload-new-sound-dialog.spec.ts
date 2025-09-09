import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadNewSoundDialog } from './upload-new-sound-dialog';

describe('UploadNewSoundDialog', () => {
  let component: UploadNewSoundDialog;
  let fixture: ComponentFixture<UploadNewSoundDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadNewSoundDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadNewSoundDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
