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
    { icon: '📘', name: 'Facebook', url: 'https://www.facebook.com/Neudrasil.Rehabilitacion/' },
    { icon: '📸', name: 'Instagram', url: 'https://www.instagram.com/neudrasil.rehabilitacion/' },
    { icon: '💼', name: 'LinkedIn', url: 'https://www.linkedin.com/company/neudrasil-rehabilitaci%C3%B3n-neurocognitiva-y-salud-mental/?originalSubdomain=bo' },
  ];
}
