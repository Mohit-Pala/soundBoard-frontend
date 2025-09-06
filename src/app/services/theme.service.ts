import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentThemeSubject = new BehaviorSubject<string>('auto');
  public currentTheme$ = this.currentThemeSubject.asObservable();

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.initializeTheme();
  }

  private initializeTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme') || 'auto';
      this.currentThemeSubject.next(savedTheme);
      this.applyTheme(savedTheme);
    }
  }

  setTheme(theme: string) {
    this.currentThemeSubject.next(theme);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', theme);
      this.applyTheme(theme);
    }
  }

  getCurrentTheme(): string {
    return this.currentThemeSubject.value;
  }

  private applyTheme(theme: string) {
    const htmlElement = this.document.documentElement;
    
    if (theme === 'light') {
      htmlElement.setAttribute('data-theme', 'caramellatte');
    } else if (theme === 'dark') {
      htmlElement.setAttribute('data-theme', 'coffee');
    } else {
      if (isPlatformBrowser(this.platformId) && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        htmlElement.setAttribute('data-theme', 'coffee');
      } else {
        htmlElement.setAttribute('data-theme', 'caramellatte');
      }
    }
  }
}