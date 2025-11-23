// src/app/components/appointment-form/appointment-form.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Appointment, THERAPY_TYPES, TherapyType } from '../../core/models/appointment.model';
import { SupabaseService } from '../../core/services/supabase.service';
import { QuestionnaireService } from '../../core/services/questionnaire.service';

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  appointmentForm!: FormGroup;
  therapyTypes = THERAPY_TYPES;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(
    private fb: FormBuilder,
    private supabaseService: SupabaseService,
    private questionnaireService: QuestionnaireService
  ) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      patientName: ['', [Validators.required, Validators.minLength(3)]],
      patientEmail: ['', [Validators.required, Validators.email]],
      patientPhone: ['', [Validators.required, Validators.pattern(/^[0-9]{8,15}$/)]],
      therapyType: ['evaluacion-inicial', Validators.required],
      description: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.appointmentForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitError = false;

      try {
        const formValue = this.appointmentForm.value;
        const questionnaireResult = this.questionnaireService.getCurrentResult();

        const appointment: Appointment = {
          patientName: formValue.patientName,
          patientEmail: formValue.patientEmail,
          patientPhone: formValue.patientPhone,
          therapyType: formValue.therapyType as TherapyType,
          description: formValue.description,
          questionnaireResult: questionnaireResult ? {
            score: questionnaireResult.score,
            category: questionnaireResult.category,
            severity: questionnaireResult.severity
          } : undefined,
          status: 'pending',
          createdAt: new Date()
        };

        await this.supabaseService.saveAppointment(appointment);

        this.submitSuccess = true;
        setTimeout(() => {
          this.submitted.emit();
        }, 2500);

      } catch (error) {
        console.error('Error al guardar la cita:', error);
        this.submitError = true;
      } finally {
        this.isSubmitting = false;
      }
    } else {
      // Marcar todos los campos como touched para mostrar errores
      Object.keys(this.appointmentForm.controls).forEach(key => {
        this.appointmentForm.get(key)?.markAsTouched();
      });
    }
  }

  onCancel(): void {
    this.cancelled.emit();
  }

  hasError(fieldName: string, errorType: string): boolean {
    const field = this.appointmentForm.get(fieldName);
    return !!(field && field.hasError(errorType) && field.touched);
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.appointmentForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
}
