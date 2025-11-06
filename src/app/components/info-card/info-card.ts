import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-card.html',
  styleUrl: './info-card.css'
})
export class InfoCard {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() content: string = '';
  @Input() features: string[] = [];
  @Input() alignment: 'left' | 'right' | 'center' = 'center';
  @Input() buttonText: string = 'Descubre Más';
  @Input() secondaryButtonText: string = '';
  @Input() showButton: boolean = true;
}
