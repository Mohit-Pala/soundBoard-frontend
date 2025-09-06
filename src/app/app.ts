import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('soundBoard');
  currentTheme = 'auto';

  constructor(private themeService: ThemeService) {}

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

  ngOnInit() {
    // Subscribe to theme changes
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  setTheme(theme: string) {
    this.themeService.setTheme(theme);
  }
}
