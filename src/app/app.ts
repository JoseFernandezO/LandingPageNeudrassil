import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { InfoCard } from './components/info-card/info-card';
import { Footer } from './components/footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Header,
    Hero,
    InfoCard,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  sections = [
    { id: 'inicio', title: 'Inicio', icon: '🏥' },
    { id: 'por-que-nosotros', title: 'Nosotros', icon: '💙' },
    { id: 'servicios', title: 'Servicios', icon: '🧠' },
    { id: 'proceso', title: 'Proceso', icon: '📋' },
    { id: 'faq', title: 'FAQ', icon: '❓' },
    { id: 'contacto', title: 'Contacto', icon: '📞' }
  ];

  // Sección: ¿Por Qué Neudrassil?
  porQueContent = `En Centro Neudrassil entendemos que cada persona es única y merece
    atención especializada. Nuestro equipo de profesionales trabaja con dedicación y empatía
    para acompañarte en cada paso de tu proceso terapéutico, brindando soluciones personalizadas
    que se adaptan a tus necesidades específicas.`;

  porQueFeatures = [
    '✓ Atención Personalizada e Integral - Cada plan terapéutico se diseña específicamente para ti',
    '✓ Profesionales Certificados - Equipo multidisciplinario con amplia experiencia',
    '✓ Ambiente Cómodo y Seguro - Instalaciones diseñadas para tu comodidad y confianza',
    '✓ Seguimiento Continuo - Monitoreamos tu progreso y ajustamos según tus avances'
  ];

  // Sección: Servicios
  serviciosContent = `Ofrecemos terapias especializadas diseñadas para atender las necesidades
    únicas de cada persona, desde niños hasta adultos. Utilizamos metodologías basadas en
    evidencia científica y las mejores prácticas internacionales.`;

  serviciosFeatures = [
    '🗣️ Terapia de Lenguaje - Desarrollo y rehabilitación del habla y comunicación',
    '🤲 Terapia Ocupacional - Mejora de habilidades para actividades diarias',
    '🏃 Terapia Física - Rehabilitación y fortalecimiento físico',
    '🧘 Psicología Clínica - Apoyo emocional y conductual',
    '👶 Estimulación Temprana - Desarrollo integral en edades tempranas',
    '🎯 Integración Sensorial - Procesamiento y respuesta a estímulos sensoriales'
  ];

  // Sección: Proceso
  procesoContent = `Un proceso estructurado y personalizado que te acompaña desde la primera
    consulta hasta alcanzar tus objetivos terapéuticos.`;

  procesoSteps = [
    '1️⃣ Evaluación Inicial - Analizamos tu situación y necesidades específicas en una sesión completa de 60-90 minutos',
    '2️⃣ Plan Personalizado - Diseñamos una estrategia terapéutica adaptada a ti con objetivos claros y medibles',
    '3️⃣ Sesiones Terapéuticas - Trabajamos juntos aplicando técnicas especializadas con seguimiento continuo',
    '4️⃣ Evaluación y Ajustes - Medimos resultados periódicamente y optimizamos tu tratamiento según tu progreso'
  ];

  // Sección: FAQ
  faqContent = `Resolvemos tus dudas más comunes sobre nuestros servicios y proceso de atención.`;

  faqList = [
    '❓ ¿Qué edades atienden? - Atendemos desde niños pequeños hasta adultos mayores, con servicios adaptados para todas las etapas de la vida',
    '❓ ¿Necesito referencia médica? - No es estrictamente necesario, aunque es recomendable. Puedes agendar directamente con nosotros',
    '❓ ¿Cuánto dura una sesión? - Las sesiones duran generalmente entre 45 y 60 minutos, dependiendo del tipo de terapia',
    '❓ ¿Con qué frecuencia debo asistir? - Depende de tu plan personalizado, puede ser de 1 a 3 veces por semana',
    '❓ ¿Aceptan seguros médicos? - Contáctanos para verificar si tu seguro está incluido o consultar nuestras opciones de pago',
    '❓ ¿Cómo agendo mi primera cita? - Puedes agendar por WhatsApp, llamada o formulario web. Te responderemos a la brevedad'
  ];

  // Sección: Contacto
  contactoContent = `Estamos listos para atenderte en Tarija. Comunícate con nosotros y agenda
    tu evaluación inicial.`;

  contactoInfo = [
    '📍 Ubicación - [Calle y número], [Barrio], Tarija - Bolivia',
    '📞 Teléfono - [Número de teléfono fijo]',
    '💬 WhatsApp - [Número de WhatsApp]',
    '✉️ Email - contacto@neudrassil.com',
    '🕐 Horario - Lun-Vie: 8:00 AM - 6:00 PM | Sáb: 9:00 AM - 1:00 PM',
    '🚗 Facilidades - Estacionamiento disponible y acceso para personas con movilidad reducida'
  ];
}
