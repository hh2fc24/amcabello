export type NavItem = { label: string; href: string };

export type Principle = {
  title: string;
  description: string;
  bullets: [string, string, string];
};

export type Service = {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  ctaLabel: string;
};

export type WorkStep = {
  title: string;
  description: string;
  bullets: string[];
};

const whatsappHref =
  "https://wa.me/?text=Hola%20%C3%81lvaro%2C%20necesito%20asesor%C3%ADa%20experta%20en%20mis%20proyectos.%20%C2%BFPodemos%20coordinar%20un%20diagn%C3%B3stico%3F";

export const content = {
  brand: {
    name: "Ing. Álvaro M. Cabello P.",
    credentials: "Ingeniería de Alto Nivel · SEC Clase A · Expertos en ROI",
    location: "Cobertura Exclusiva: Santiago - Región Metropolitana",
  },
  links: {
    whatsapp: {
      href: whatsappHref,
    },
    email: {
      href: "mailto:hh2fc24@gmail.com",
      label: "contacto@alvarocabello.cl",
    },
  },
  a11y: {
    skipToContent: "Saltar al contenido principal",
  },
  nav: {
    items: [
      { label: "Soluciones", href: "#servicios" },
      { label: "Metodología", href: "#como-trabajo" },
      { label: "Garantía", href: "#compromisos" },
      { label: "Hablemos", href: "#contacto" },
    ] satisfies NavItem[],
    cta: { label: "Agendar Asesoría", href: "#contacto" },
  },
  hero: {
    headline:
      "Ingeniería Eléctrica y Climatización que Maximiza tu Inversión: Seguro, Eficiente y Rentable.",
    subheadline:
      "Transformamos necesidades técnicas complejas en soluciones estratégicas. Diseño FV, Climatización de Alta Eficiencia y Normativa SEC con un enfoque obsesivo en el Retorno de Inversión y Seguridad Operacional.",
    primaryCta: {
      label: "Solicitar Diagnóstico Gratuito",
      href: "/?servicio=diagnostico#contacto",
    },
    secondaryCta: { label: "Consultar por WhatsApp", href: whatsappHref },
    bullets: [
      { title: "Rentabilidad Asegurada", text: "Modelos financieros claros: CAPEX, OPEX y Payback real." },
      {
        title: "Seguridad Certificada",
        text: "Cumplimiento estricto SEC y estándares internacionales NFPA.",
      },
      {
        title: "Transparencia Total",
        text: "Trazabilidad completa. Sin sorpresas, solo resultados.",
      },
    ],
    credentialsLabel: "Respaldo Profesional",
  },
  sections: {
    welcome: {
      id: "bienvenido",
      kicker: "Tu Partner Técnico",
      title: "Más que ingeniería, entregamos tranquilidad y resultados financieros.",
      paragraphs: [
        "En un mercado saturado de promesas vacías, me diferencio por la precisión técnica y la visión comercial. Como Ingeniero Civil Eléctrico SEC Clase A, no solo firmo planos; diseño activos que generan valor.",
        "Desde plantas fotovoltaicas (30–300 kW) que reducen drásticamente tus costos operativos, hasta sistemas de climatización inteligente que elevan el confort sin disparar la factura. Todo bajo una supervisión estricta de Calidad (ITO/QA) y cumplimiento normativo.",
        "Trabajo con clientes que exigen excelencia. Si buscas lo 'bueno, bonito y barato', no soy tu opción. Si buscas seguridad, eficiencia y rentabilidad a largo plazo, hablemos.",
      ],
    },
    principles: {
      id: "principios",
      title: "Por qué elegirme", // More commercial than "Principios"
      items: [
        {
          title: "Inversión Inteligente",
          description:
            "Tu proyecto no es un gasto, es un activo. Optimizo cada variable técnica para acelerar el recupero de tu inversión (ROI) y garantizar operatividad continua.",
          bullets: [
            "Evaluación financiera sólida (CAPEX/OPEX).",
            "Maximización de producción energética.",
            "Reducción de costos por fallas imprevistas.",
          ],
        },
        {
          title: "Cero Letra Chica",
          description:
            "La confianza se construye con verdad. Mis propuestas son detalladas, transparentes y comparables. Sabrás exactamente qué compras y por qué te conviene.",
          bullets: [
            "Presupuestos desglosados y claros.",
            "Cronogramas realistas y cumplibles.",
            "Reportes de avance en tiempo real.",
          ],
        },
        {
          title: "Blindaje Normativo",
          description:
            "Duerme tranquilo sabiendo que tu instalación cumple y supera la normativa vigente. Evita multas, riesgos legales y peligros para las personas.",
          bullets: [
            "Certificación SEC Garantizada (TE-1/TE-4).",
            "Estándares de seguridad NFPA.",
            "Documentación técnica a prueba de auditorías.",
          ],
        },
      ] satisfies Principle[],
    },
    services: {
      id: "servicios",
      title: "Soluciones Integrales",
      subtitle: "Servicios de ingeniería diseñados para potenciar tu infraestructura.",
      items: [
        {
          id: "fv",
          title: "Energía Solar Corporativa (30–300 kW)",
          description:
            "Reduce tus costos fijos con autogeneración industrial. Diseños optimizados para máximo rendimiento y vida útil, aprovechando ley Netbilling.",
          deliverables: [
            "Ingeniería de detalle y simulación de producción.",
            "Tramitación y conexión TE-4.",
            "Especificaciones de alta durabilidad.",
            "Monitoreo de ahorro proyectado.",
          ],
          ctaLabel: "Cotizar Proyecto Solar",
        },
        {
          id: "ito",
          title: "Inspección Técnica de Obras (ITO)",
          description:
            "Tus ojos expertos en terreno. Aseguro que lo que contratas es lo que realmente se instala. Control de calidad riguroso para evitar vicios ocultos.",
          deliverables: [
            "Supervisión estricta de instaladores.",
            "Validación de materiales y montaje.",
            "Informes de No Conformidad.",
            "Recepción final conforme a norma.",
          ],
          ctaLabel: "Contratar Inspección",
        },
        {
          id: "om",
          title: "Operación & Mantenimiento (O&M)",
          description:
            "Protege tu inversión. Un sistema sin mantenimiento pierde dinero cada día. Planes preventivos y correctivos para asegurar disponibilidad 24/7.",
          deliverables: [
            "Limpieza técnica y termografía.",
            "Revisión de inversores y protecciones.",
            "Análisis de curvas de generación.",
            "Respuesta rápida ante fallas.",
          ],
          ctaLabel: "Asegurar Mantenimiento",
        },
        {
          id: "hvac",
          title: "Climatización Inteligente (VRF/Bombas de Calor)",
          description:
            "Confort premium con consumo mínimo. Reemplaza calderas caras y contaminantes por tecnología eléctrica eficiente. Ideal para oficinas y grandes residencias.",
          deliverables: [
            "Cálculo térmico de precisión.",
            "Selección de equipos de alta eficiencia (SEER/SCOP).",
            "Integración estética y funcional.",
            "Comparativa de ahorro vs Gas/Diesel.",
          ],
          ctaLabel: "Mejorar Climatización",
        },
      ] satisfies Service[],
    },
    howItWorks: {
      id: "como-trabajo",
      title: "Metodología de Éxito",
      subtitle: "Un proceso estructurado para eliminar la incertidumbre.",
      steps: [
        {
          title: "1. Diagnóstico Estratégico",
          description:
            "No vendemos 'cajas'. Primero entendemos tu dolor, tu infraestructura y tu meta financiera. Evaluamos viabilidad en 30 minutos.",
          bullets: [
            "Análisis de factibilidad técnica.",
            "Revisión de historial de consumo.",
            "Detección de oportunidades ocultas.",
          ],
        },
        {
          title: "2. Propuesta de Valor",
          description:
            "Recibes un plan de ingeniería detallado, con números claros. Inversión, retorno y especificaciones técnicas sin ambigüedades.",
          bullets: [
            "Ingeniería conceptual sólida.",
            "Flujo de caja proyectado.",
            "Carta gantt preliminar.",
          ],
        },
        {
          title: "3. Ejecución Impecable",
          description:
            "Coordinación total. Desde la logística hasta la puesta en marcha. Entregamos llave en mano, certificado y operando al 100%.",
          bullets: [
            "Gestión integral de obra.",
            "Protocolos de seguridad (HSE).",
            "Capacitación de usuarios y entrega de dossier.",
          ],
        },
      ] satisfies WorkStep[],
    },
    commitment: {
      id: "compromisos",
      title: "La Garantía Álvaro Cabello",
      subtitle:
        "Excelencia técnica no negociable. Tu tranquilidad es nuestro activo más valioso.",
      items: [
        "Cumplimiento Normativo Garantizado (Sin rechazos SEC).",
        "Seguros y Garantías de Ejecución.",
        "Soporte Post-Venta Real y Efectivo.",
        "Calidad de materiales validada por laboratorio.",
      ],
    },
    contact: {
      id: "contacto",
      title: "Da el Siguiente Paso",
      subtitle:
        "¿Listo para profesionalizar tus proyectos de energía? Completa el formulario y recibe una evaluación inicial sin costo.",
      whatsapp: { label: "WhatsApp Directo", href: whatsappHref },
      form: {
        title: "Agenda tu Evaluación",
        submitLabel: "Enviar Solicitud",
        successMessage:
          "¡Excelente! Hemos recibido tus datos. Te contactaremos en breve para coordinar.",
        fields: {
          name: { label: "Nombre Completo", placeholder: "Ej: Juan Pérez" },
          email: { label: "Correo Corporativo/Personal", placeholder: "contacto@empresa.com" },
          phone: { label: "Teléfono de Contacto", placeholder: "+56 9 1234 5678" },
          service: { label: "Interés Principal" },
          message: {
            label: "Detalles del Proyecto",
            placeholder: "Cuéntame brevemente qué necesitas resolver o implementar...",
          },
        },
        serviceOptions: [
          { value: "diagnostico", label: "Quiero una evaluación general" },
          { value: "fv", label: "Proyecto Solar Fotovoltaico" },
          { value: "ito", label: "Inspección Técnica (ITO)" },
          { value: "om", label: "Mantenimiento (O&M)" },
          { value: "hvac", label: "Climatización / Bombas de Calor" },
        ],
      },
    },
    footer: {
      tagline: "Ingeniería de Valor. Energía Segura. Resultados Comprobados.",
      servicesLabel: "Nuestras Soluciones",
      locationLabel: " Área de Servicio",
    },
  },
} as const;
