// Modelo para las preguntas del cuestionario
export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
  category: 'depression' | 'anxiety' | 'trauma' | 'concentration' | 'mood';
}

export interface QuestionOption {
  value: number; // 0-3 (nunca, a veces, frecuentemente, siempre)
  label: string;
}

export interface QuestionnaireAnswer {
  questionId: number;
  answer: number;
}

export interface QuestionnaireResult {
  score: number;
  category: string;
  recommendation: string;
  severity: 'low' | 'moderate' | 'high';
}

// Preguntas predefinidas del cuestionario
export const QUESTIONNAIRE_QUESTIONS: Question[] = [
  {
    id: 1,
    text: '¿Con qué frecuencia se ha sentido desanimado/a, deprimido/a o sin esperanzas?',
    category: 'depression',
    options: [
      { value: 0, label: 'Nunca' },
      { value: 1, label: 'Varios días' },
      { value: 2, label: 'Más de la mitad de los días' },
      { value: 3, label: 'Casi todos los días' }
    ]
  },
  {
    id: 2,
    text: '¿Ha tenido poco interés o placer en hacer las cosas?',
    category: 'depression',
    options: [
      { value: 0, label: 'Nunca' },
      { value: 1, label: 'Varios días' },
      { value: 2, label: 'Más de la mitad de los días' },
      { value: 3, label: 'Casi todos los días' }
    ]
  },
  {
    id: 3,
    text: '¿Se ha sentido nervioso/a, ansioso/a o con los nervios de punta?',
    category: 'anxiety',
    options: [
      { value: 0, label: 'Nunca' },
      { value: 1, label: 'Varios días' },
      { value: 2, label: 'Más de la mitad de los días' },
      { value: 3, label: 'Casi todos los días' }
    ]
  },
  {
    id: 4,
    text: '¿Ha sido incapaz de parar o controlar sus preocupaciones?',
    category: 'anxiety',
    options: [
      { value: 0, label: 'Nunca' },
      { value: 1, label: 'Varios días' },
      { value: 2, label: 'Más de la mitad de los días' },
      { value: 3, label: 'Casi todos los días' }
    ]
  },
  {
    id: 5,
    text: '¿Ha experimentado recuerdos intrusivos o flashbacks de eventos traumáticos?',
    category: 'trauma',
    options: [
      { value: 0, label: 'Nunca' },
      { value: 1, label: 'Ocasionalmente' },
      { value: 2, label: 'Frecuentemente' },
      { value: 3, label: 'Constantemente' }
    ]
  },
  {
    id: 6,
    text: '¿Evita lugares, personas o actividades que le recuerdan experiencias difíciles?',
    category: 'trauma',
    options: [
      { value: 0, label: 'Nunca' },
      { value: 1, label: 'Ocasionalmente' },
      { value: 2, label: 'Frecuentemente' },
      { value: 3, label: 'Constantemente' }
    ]
  },
  {
    id: 7,
    text: '¿Tiene dificultades para concentrarse o mantener la atención?',
    category: 'concentration',
    options: [
      { value: 0, label: 'Nunca' },
      { value: 1, label: 'A veces' },
      { value: 2, label: 'Con frecuencia' },
      { value: 3, label: 'Siempre' }
    ]
  },
  {
    id: 8,
    text: '¿Olvida cosas importantes o tiene problemas de memoria?',
    category: 'concentration',
    options: [
      { value: 0, label: 'Nunca' },
      { value: 1, label: 'A veces' },
      { value: 2, label: 'Con frecuencia' },
      { value: 3, label: 'Siempre' }
    ]
  },
  {
    id: 9,
    text: '¿Ha experimentado cambios bruscos de ánimo sin razón aparente?',
    category: 'mood',
    options: [
      { value: 0, label: 'Nunca' },
      { value: 1, label: 'Raramente' },
      { value: 2, label: 'Frecuentemente' },
      { value: 3, label: 'Muy frecuentemente' }
    ]
  },
  {
    id: 10,
    text: '¿Se siente irritable o tiene dificultades para controlar sus emociones?',
    category: 'mood',
    options: [
      { value: 0, label: 'Nunca' },
      { value: 1, label: 'Raramente' },
      { value: 2, label: 'Frecuentemente' },
      { value: 3, label: 'Muy frecuentemente' }
    ]
  }

];

export const QUESTIONNAIRE_DISCLAIMER = {
  welcome: `
    ⚠️ IMPORTANTE: Este cuestionario es una herramienta orientativa
    y NO constituye un diagnóstico médico. Los resultados son
    aproximados y deben ser confirmados por un profesional de la salud.
  `,

  result: `
    Este resultado es orientativo y no reemplaza una evaluación
    profesional completa. Para un diagnóstico preciso y plan de
    tratamiento personalizado, le recomendamos agendar una cita
    con nuestros especialistas certificados.
  `
};
