import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  QuestionnaireAnswer,
  QuestionnaireResult,
  QUESTIONNAIRE_QUESTIONS
} from '../models/questionnaire.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  private answersSubject = new BehaviorSubject<QuestionnaireAnswer[]>([]);
  public answers$: Observable<QuestionnaireAnswer[]> = this.answersSubject.asObservable();

  private resultSubject = new BehaviorSubject<QuestionnaireResult | null>(null);
  public result$: Observable<QuestionnaireResult | null> = this.resultSubject.asObservable();

  constructor() {}

  // Guardar respuestas
  saveAnswers(answers: QuestionnaireAnswer[]): void {
    this.answersSubject.next(answers);
  }

  // Calcular resultado basado en respuestas
  calculateResult(answers: QuestionnaireAnswer[]): QuestionnaireResult {
    const totalScore = answers.reduce((sum, answer) => sum + answer.answer, 0);
    const maxScore = QUESTIONNAIRE_QUESTIONS.length * 3; // Máximo 3 puntos por pregunta
    const percentage = (totalScore / maxScore) * 100;

    let severity: 'low' | 'moderate' | 'high';
    let category: string;
    let recommendation: string;

    // Determinar severidad y recomendación
    if (percentage < 33) {
      severity = 'low';
      category = 'Síntomas Leves';
      recommendation = 'Sus respuestas indican síntomas leves. Una evaluación inicial podría ser beneficiosa para mantener su bienestar.';
    } else if (percentage < 66) {
      severity = 'moderate';
      category = 'Síntomas Moderados';
      recommendation = 'Sus respuestas sugieren síntomas moderados que podrían beneficiarse de atención profesional. Recomendamos agendar una evaluación.';
    } else {
      severity = 'high';
      category = 'Síntomas Significativos';
      recommendation = 'Sus respuestas indican síntomas significativos. Le recomendamos encarecidamente agendar una cita para una evaluación profesional.';
    }

    const result: QuestionnaireResult = {
      score: totalScore,
      category,
      recommendation,
      severity
    };

    this.resultSubject.next(result);
    return result;
  }

  // Obtener resultado actual
  getCurrentResult(): QuestionnaireResult | null {
    return this.resultSubject.value;
  }

  // Limpiar datos
  clearData(): void {
    this.answersSubject.next([]);
    this.resultSubject.next(null);
  }
}
