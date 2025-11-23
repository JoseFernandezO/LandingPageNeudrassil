// src/app/app.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { WelcomeModalComponent } from './components/welcome-modal/welcome-modal.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { QuestionnaireResultComponent } from './components/questionnaire-result/questionnaire-result.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';

// Estados de la aplicación
type AppState =
  | 'welcome'        // Modal inicial
  | 'questionnaire'  // Cuestionario activo
  | 'result'         // Resultado del cuestionario
  | 'appointment'    // Formulario de cita
  | 'landing';       // Página normal

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Header,
    Footer,
    Hero,
    WelcomeModalComponent,
    QuestionnaireComponent,
    QuestionnaireResultComponent,
    AppointmentFormComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  currentState: AppState = 'welcome'; // Comienza con el modal

  // Datos para las secciones de la landing
  sections = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'por-que-nosotros', label: '¿Por Qué Nosotros?' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'nuestro-enfoque', label: 'Nuestro Enfoque' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contacto', label: 'Contacto' }
  ];

  // ========== HANDLERS DEL MODAL DE BIENVENIDA ==========

  onStartQuestionnaire(): void {
    this.currentState = 'questionnaire';
  }

  onSkipQuestionnaire(): void {
    this.currentState = 'landing';
  }

  // ========== HANDLERS DEL CUESTIONARIO ==========

  onQuestionnaireCompleted(): void {
    this.currentState = 'result';
  }

  onQuestionnaireCancelled(): void {
    this.currentState = 'landing';
  }

  // ========== HANDLERS DEL RESULTADO ==========

  onScheduleAppointment(): void {
    this.currentState = 'appointment';
  }

  onResultClose(): void {
    this.currentState = 'landing';
  }

  // ========== HANDLERS DEL FORMULARIO DE CITA ==========

  onAppointmentSubmitted(): void {
    this.currentState = 'landing';
  }

  onAppointmentCancelled(): void {
    this.currentState = 'landing';
  }

  // ========== MÉTODO PÚBLICO PARA ABRIR FORMULARIO ==========

  openAppointmentForm(): void {
    this.currentState = 'appointment';
  }
}
