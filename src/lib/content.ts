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
  "https://wa.me/?text=Hola%20%C3%81lvaro%2C%20me%20gustar%C3%ADa%20agendar%20un%20diagn%C3%B3stico%20t%C3%A9cnico%20(15%E2%80%9330%20min).%20%C2%BFPodemos%20coordinar%3F";

export const content = {
  brand: {
    name: "Ing. Álvaro M. Cabello P.",
    credentials: "Ing. Civil Eléctrico · SEC Clase A · +12 años",
    location: "Santiago y Región Metropolitana (RM)",
  },
  links: {
    whatsapp: {
      href: whatsappHref,
    },
    email: {
      href: "mailto:hh2fc24@gmail.com",
      label: "hh2fc24@gmail.com",
    },
  },
  a11y: {
    skipToContent: "Saltar al contenido principal",
  },
  nav: {
    items: [
      { label: "Servicios", href: "#servicios" },
      { label: "Cómo trabajo", href: "#como-trabajo" },
      { label: "Compromisos", href: "#compromisos" },
      { label: "Contacto", href: "#contacto" },
    ] satisfies NavItem[],
    cta: { label: "Conversemos", href: "#contacto" },
  },
  hero: {
    headline:
      "Diseño eléctrico, ingeniería FV 30–300 kW, TE-4/Netbilling y climatización eficiente (HP/VRF) para hogares y pymes en Santiago y RM.",
    subheadline:
      "Traduzco lo técnico en decisiones simples, seguras y rentables, con transparencia, trazabilidad documental y foco en ROI.",
    primaryCta: {
      label: "Agendar diagnóstico",
      href: "/?servicio=diagnostico#contacto",
    },
    secondaryCta: { label: "WhatsApp", href: whatsappHref },
    bullets: [
      { title: "Rentabilidad/ROI", text: "Modelo CAPEX/OPEX y payback realista." },
      {
        title: "Seguridad/Normativa",
        text: "Cumplimiento SEC y buenas prácticas (incl. NFPA 70E).",
      },
      {
        title: "Transparencia/Trazabilidad",
        text: "Alcances, cambios y evidencias con documentación verificable.",
      },
    ],
    credentialsLabel: "Credenciales",
  },
  sections: {
    welcome: {
      id: "bienvenido",
      kicker: "Bienvenido",
      title: "Ingeniería aplicada para decisiones seguras y rentables",
      paragraphs: [
        "Soy Álvaro Cabello, Ingeniero Civil Eléctrico SEC Clase A con más de 12 años de experiencia liderando y ejecutando proyectos eléctricos, fotovoltaicos, de climatización y automatización en entornos residenciales, comerciales e industriales. Mi sello es claro: traduzco lo técnico en decisiones simples, seguras y rentables para personas y empresas que valoran la transparencia.",
        "Diseño e implemento —junto a partners asociados— proyectos FV 30–300 kW con ITO/QA·QC, TE-4/Netbilling, puesta en servicio y O&M. Integro climatización eficiente (bombas de calor/VRF) con seguridad eléctrica, ROI y trazabilidad documental.",
        "Trabajo por honorarios con equipos certificados en Santiago y RM.",
      ],
    },
    principles: {
      id: "principios",
      title: "Principios",
      items: [
        {
          title: "Compromiso con Rentabilidad e Impacto Sostenible",
          description:
            "Ingeniería que se paga sola: optimizo PR, disponibilidad y ROI en FV, BESS y climatización eficiente con supuestos claros y seguimiento de desempeño.",
          bullets: [
            "Modelo CAPEX/OPEX y payback realista.",
            "Plan de O&M con KPIs y alertas.",
            "Gestión de garantías y repuestos críticos.",
          ],
        },
        {
          title: "Claridad & Transparencia",
          description:
            "Sin letra chica: explico alcances, costos y plazos con datos y supuestos visibles para que puedas comparar y decidir con confianza.",
          bullets: [
            "Cronograma y matriz de riesgos compartidos.",
            "Comparativos técnico-económicos “manzana con manzana”.",
            "Trazabilidad online de avances y cambios.",
          ],
        },
        {
          title: "Seguridad & Rigor Técnico",
          description:
            "La seguridad va primero: diseño, montaje y O&M bajo SEC y NFPA 70E, con QA/QC trazable y protocolos consistentes.",
          bullets: [
            "TE-1/TE-4 y dossier técnico completos.",
            "Etiquetado, pruebas y comisionamiento estandarizados.",
            "ITO–QA/QC en sitio con checklists y evidencias.",
          ],
        },
      ] satisfies Principle[],
    },
    services: {
      id: "servicios",
      title: "Servicios",
      subtitle: "Alcances claros, entregables verificables y foco en desempeño.",
      items: [
        {
          id: "fv",
          title: "Ingeniería Fotovoltaica (30–300 kW)",
          description:
            "Diseño de strings, protecciones DC/AC y documentación técnica para una implementación segura y medible, con soporte para TE-4/Netbilling.",
          deliverables: [
            "Diseño de strings y protecciones DC/AC.",
            "Selección de inversores y criterios de diseño.",
            "Unifilares, memoria técnica y especificaciones.",
            "Soporte TE-4/Netbilling.",
          ],
          ctaLabel: "Solicitar evaluación",
        },
        {
          id: "ito",
          title: "ITO & QA/QC en obra",
          description:
            "Control en terreno para asegurar calidad, seguridad y cierre formal de no conformidades antes de energizar.",
          deliverables: [
            "Inspecciones en sitio y control de calidad.",
            "Checklists basados en ISO 9001.",
            "Cierre y seguimiento de no conformidades.",
            "Dossier QA/QC y pre-energización segura.",
          ],
          ctaLabel: "Solicitar evaluación",
        },
        {
          id: "om",
          title: "Puesta en Servicio & O&M",
          description:
            "Comisionamiento, verificación de PR y soporte post-entrega para sostener disponibilidad y desempeño.",
          deliverables: [
            "Pruebas funcionales y comisionamiento.",
            "Verificación de PR y medición de desempeño.",
            "Plan preventivo/correctivo.",
            "Diagnóstico de fallas (conectores, strings, aislación).",
          ],
          ctaLabel: "Solicitar evaluación",
        },
        {
          id: "hvac",
          title: "Climatización Eficiente (HP/VRF)",
          description:
            "Ingeniería de aplicación e integración eléctrica con comparativos de costo total (TCO) para decisiones informadas.",
          deliverables: [
            "Ingeniería de aplicación (bombas de calor/VRF).",
            "Integración eléctrica con foco en seguridad.",
            "Cálculo de cargas y criterios de diseño.",
            "Comparativos TCO vs. gas/parafina.",
          ],
          ctaLabel: "Solicitar evaluación",
        },
      ] satisfies Service[],
    },
    howItWorks: {
      id: "como-trabajo",
      title: "Cómo trabajo",
      subtitle: "Un proceso simple, con criterios técnicos y decisiones con respaldo.",
      steps: [
        {
          title: "Diagnóstico técnico (15–30 min)",
          description:
            "Levantamiento inicial para entender tu objetivo, restricciones y condiciones de sitio.",
          bullets: [
            "Reunión breve para alcance y expectativas.",
            "Datos de sitio y tarifa eléctrica.",
            "Riesgos críticos y próximos pasos.",
          ],
        },
        {
          title: "Propuesta técnica-económica",
          description:
            "Documento claro con normativa aplicable, plazos, supuestos y estimación de ROI.",
          bullets: [
            "Alcances y entregables explícitos.",
            "Criterios normativos y de seguridad.",
            "Plazos y estimación de ROI con supuestos visibles.",
          ],
        },
        {
          title: "Ejecución y entrega",
          description:
            "Implementación con control de calidad y cierre documental para operar con seguridad y trazabilidad.",
          bullets: [
            "Checklist SEC y evidencias de QA/QC.",
            "Dossier técnico y cierre de no conformidades.",
            "Plan O&M para sostener desempeño.",
          ],
        },
      ] satisfies WorkStep[],
    },
    commitment: {
      id: "compromisos",
      title: "Compromiso profesional",
      subtitle:
        "Rigor, seguridad y trazabilidad como estándar en cada etapa del proyecto.",
      items: [
        "Seguridad y cumplimiento primero (SEC, NFPA 70E).",
        "Transparencia total en alcances, costos y plazos.",
        "Trazabilidad documental y medición de desempeño (PR).",
        "Acompañamiento post-entrega para asegurar resultados.",
      ],
    },
    contact: {
      id: "contacto",
      title: "Conversemos",
      subtitle:
        "Cuéntame tu contexto y te propongo un siguiente paso claro. Respuesta en 24–48 h hábiles.",
      whatsapp: { label: "WhatsApp", href: whatsappHref },
      form: {
        title: "Formulario de contacto",
        submitLabel: "Enviar",
        successMessage:
          "Gracias. Recibí tu solicitud y te contactaré en 24–48 horas hábiles.",
        fields: {
          name: { label: "Nombre", placeholder: "Tu nombre" },
          email: { label: "Email", placeholder: "tu@correo.com" },
          phone: { label: "Teléfono", placeholder: "+56 9 ..." },
          service: { label: "Tipo de servicio" },
          message: {
            label: "Mensaje",
            placeholder: "Describe brevemente tu necesidad y objetivo.",
          },
        },
        serviceOptions: [
          { value: "diagnostico", label: "Diagnóstico técnico / no estoy seguro" },
          { value: "fv", label: "Ingeniería Fotovoltaica (30–300 kW)" },
          { value: "ito", label: "ITO & QA/QC en obra" },
          { value: "om", label: "Puesta en Servicio & O&M" },
          { value: "hvac", label: "Climatización Eficiente (HP/VRF)" },
        ],
      },
    },
    footer: {
      tagline: "Diseño eléctrico y energía con rigor, seguridad y trazabilidad.",
      servicesLabel: "Servicios",
      locationLabel: "Cobertura",
    },
  },
} as const;
