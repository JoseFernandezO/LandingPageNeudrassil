import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    // Configurar Supabase con tus credenciales
    const supabaseUrl = 'https://ylehhtglrfjttcksgdyo.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsZWhodGdscmZqdHRja3NnZHlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzOTk5MDksImV4cCI6MjA3ODk3NTkwOX0.MW2VUdxCM4GPh5ijoGCE6mvFY8eo7mIVKbIFf46U4JE'


    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  // Guardar cita en Supabase
  async saveAppointment(appointment: Appointment): Promise<any> {
    try {
      // Preparar datos para Supabase (convertir nombres de snake_case)
      const appointmentData = {
        patient_name: appointment.patientName,
        patient_email: appointment.patientEmail,
        patient_phone: appointment.patientPhone,
        appointment_date: appointment.appointmentDate || null,
        appointment_time: appointment.appointmentTime || null,
        therapy_type: appointment.therapyType,
        description: appointment.description,
        questionnaire_result: appointment.questionnaireResult || null,
        status: appointment.status,
        created_at: new Date().toISOString()
      };

      const { data, error } = await this.supabase
        .from('appointments')
        .insert([appointmentData])
        .select();

      if (error) {
        console.error('Error de Supabase:', error);
        throw error;
      }

      console.log('Cita guardada exitosamente:', data);
      return data;
    } catch (error) {
      console.error('Error al guardar la cita:', error);
      throw error;
    }
  }

  // Obtener slots disponibles (preparado para futura implementación)
  async getAvailableSlots(date: Date): Promise<any[]> {
    try {
      const { data, error } = await this.supabase
        .from('available_slots')
        .select('*')
        .eq('date', date.toISOString().split('T')[0])
        .eq('is_available', true);

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error al obtener slots:', error);
      return [];
    }
  }
}
