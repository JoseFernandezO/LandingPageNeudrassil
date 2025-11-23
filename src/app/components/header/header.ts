// src/app/components/header/header.component.ts
import { Component, HostListener, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavSection {
  id: string;
  label: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  @Input() sections: NavSection[] = [];
  @Output() appointmentClick = new EventEmitter<void>();

  isScrolled = false;
  activeSection = 'inicio';

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      this.activeSection = sectionId;
    }
  }

  private updateActiveSection(): void {
    const sections = this.sections.map(s => s.id);

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = sectionId;
          break;
        }
      }
    }
  }

  onAppointmentClick(): void {
    this.appointmentClick.emit();
  }
}
