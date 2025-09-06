import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('soundBoard');

  tabs = [
    { label: 'Home', route: '/home' },
    { label: 'Sounds', route: '/sounds' },
    { label: 'About', route: '/about' },
  ]

  userMenuItems = [
    { label: 'Profile', route: '/profile' },
    { label: 'Settings', route: '/settings' },
    { label: 'Login', route: '/login' }
  ]
}
