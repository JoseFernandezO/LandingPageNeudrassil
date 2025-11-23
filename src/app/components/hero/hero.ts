// src/app/components/hero/hero.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class Hero {
  @Output() appointmentClick = new EventEmitter<void>();  // ✅ Para abrir formulario de citas
  @Output() questionnaireClick = new EventEmitter<void>(); // Para abrir cuestionario

  onAppointmentClick(): void {
    this.appointmentClick.emit();
  }

  onQuestionnaireClick(): void {
    this.questionnaireClick.emit();
  }
}
