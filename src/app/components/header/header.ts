import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Section {
  id: string;
  title: string;
  icon: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @Input() sections: Section[] = [];
  activeSection: string = '';

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = sectionId;
    }
  }
}
