// src/app/components/welcome-modal/welcome-modal.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QUESTIONNAIRE_DISCLAIMER } from '../../core/models/questionnaire.model';

@Component({
  selector: 'app-welcome-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome-modal.component.html',
  styleUrls: ['./welcome-modal.component.css']
})
export class WelcomeModalComponent {
  @Output() startQuestionnaire = new EventEmitter<void>();
  @Output() skipQuestionnaire = new EventEmitter<void>();

  disclaimer = QUESTIONNAIRE_DISCLAIMER.welcome;

  onStartQuestionnaire(): void {
    this.startQuestionnaire.emit();
  }

  onSkip(): void {
    this.skipQuestionnaire.emit();
  }
}
