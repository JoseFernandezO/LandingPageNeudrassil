// src/app/components/questionnaire-result/questionnaire-result.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireService } from '../../core/services/questionnaire.service';
import { QuestionnaireResult, QUESTIONNAIRE_DISCLAIMER } from '../../core/models/questionnaire.model';

@Component({
  selector: 'app-questionnaire-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questionnaire-result.component.html',
  styleUrls: ['./questionnaire-result.component.css']
})
export class QuestionnaireResultComponent implements OnInit {
  @Output() scheduleAppointment = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  result: QuestionnaireResult | null = null;
  disclaimer = QUESTIONNAIRE_DISCLAIMER.result;

  constructor(private questionnaireService: QuestionnaireService) {}

  ngOnInit(): void {
    this.result = this.questionnaireService.getCurrentResult();
  }

  getSeverityClass(): string {
    if (!this.result) return '';
    return `severity-${this.result.severity}`;
  }

  getSeverityIcon(): string {
    if (!this.result) return '';
    switch (this.result.severity) {
      case 'low':
        return 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z';
      case 'moderate':
        return 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z';
      case 'high':
        return 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
      default:
        return '';
    }
  }

  onScheduleAppointment(): void {
    this.scheduleAppointment.emit();
  }

  onClose(): void {
    this.close.emit();
  }
}
