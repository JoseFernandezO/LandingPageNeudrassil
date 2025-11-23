// src/app/components/footer/footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { icon: '📘', name: 'Facebook', url: 'https://facebook.com/neudrassil' },
    { icon: '📸', name: 'Instagram', url: 'https://instagram.com/neudrassil' },
    { icon: '💼', name: 'LinkedIn', url: 'https://linkedin.com/company/neudrassil' },
    { icon: '🐦', name: 'Twitter', url: 'https://twitter.com/neudrassil' }
  ];
}
