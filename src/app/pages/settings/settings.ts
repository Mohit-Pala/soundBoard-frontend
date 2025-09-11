import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  imports: [FormsModule, CommonModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {
  settingsData = {
    displayName: 'John Doe',
    email: 'john.doe@example.com',
    notifications: {
      emailNotifications: true,
      soundNotifications: false,
      pushNotifications: true
    },
    privacy: {
      profileVisible: true,
      soundsPublic: false
    },
    audio: {
      defaultVolume: 75,
      audioQuality: 'high',
      autoPlay: false
    }
  };

  onSubmit(settingsForm: any) {
    if (settingsForm.valid) {
      console.log('Settings form submitted:', this.settingsData);
      // TODO: Implement actual settings save logic
      this.showSuccessMessage();
    }
  }

  showSuccessMessage() {
    // Simple success feedback - in a real app you might use a toast service
    alert('Settings saved successfully!');
  }

  resetToDefaults() {
    this.settingsData = {
      displayName: 'John Doe',
      email: 'john.doe@example.com',
      notifications: {
        emailNotifications: true,
        soundNotifications: false,
        pushNotifications: true
      },
      privacy: {
        profileVisible: true,
        soundsPublic: false
      },
      audio: {
        defaultVolume: 75,
        audioQuality: 'high',
        autoPlay: false
      }
    };
  }
}
