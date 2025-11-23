export interface Appointment {
  id?: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  appointmentDate?: Date;
  appointmentTime?: string;
  therapyType: TherapyType;
  description: string;
  questionnaireResult?: {
    score: number;
    category: string;
    severity: string;
  };
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt?: Date;
}

export type TherapyType =
  | 'neuropsicologia'
  | 'terapia-trauma'
  | 'terapia-cognitiva'
  | 'evaluacion-inicial'
  | 'otra';

export const THERAPY_TYPES = [
  { value: 'evaluacion-inicial', label: 'Evaluación Inicial' },
  { value: 'neuropsicologia', label: 'Neuropsicología' },
  { value: 'terapia-trauma', label: 'Terapia para Trauma' },
  { value: 'terapia-cognitiva', label: 'Terapia Cognitiva' },
  { value: 'otra', label: 'Otra' }
];
