// src/app/components/questionnaire/questionnaire.component.ts
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  QUESTIONNAIRE_QUESTIONS,
  Question,
  QuestionnaireAnswer
} from '../../core/models/questionnaire.model';
import { QuestionnaireService } from '../../core/services/questionnaire.service';

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  @Output() completed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  questions: Question[] = QUESTIONNAIRE_QUESTIONS;
  currentQuestionIndex = 0;
  answers: QuestionnaireAnswer[] = [];
  selectedOption: number | null = null;

  constructor(private questionnaireService: QuestionnaireService) {}

  ngOnInit(): void {
    // Inicializar componente
  }

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  get progress(): number {
    return ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
  }

  get isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.questions.length - 1;
  }

  selectOption(value: number): void {
    this.selectedOption = value;
  }

  nextQuestion(): void {
    if (this.selectedOption !== null) {
      // Guardar respuesta
      this.answers.push({
        questionId: this.currentQuestion.id,
        answer: this.selectedOption
      });

      if (this.isLastQuestion) {
        // Calcular resultado y emitir evento de completado
        this.questionnaireService.saveAnswers(this.answers);
        this.questionnaireService.calculateResult(this.answers);
        this.completed.emit();
      } else {
        // Ir a siguiente pregunta
        this.currentQuestionIndex++;
        this.selectedOption = null;
      }
    }
  }

  previousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      // Recuperar respuesta anterior
      const previousAnswer = this.answers.pop();
      this.selectedOption = previousAnswer?.answer ?? null;
    }
  }

  cancel(): void {
    this.cancelled.emit();
  }
}
