export interface Pillar {
  number: string;
  title: string;
  description: string;
}

export interface ConsultationStep {
  badge: string;
  title: string;
  subtitle: string;
  items: string[];
  accentColor: string;
}

export interface ComparisonRow {
  aspect: string;
  traditional: string;
  conscious: string;
}

export interface DeliverableItem {
  title: string;
  detail: string;
  benefit: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const CLINIC_INFO = {
  doctorName: 'Dr. Cristiano Miranda',
  crm: 'CRM-MG 34339',
  rqe: 'RQE 128167',
  specialtyLine: 'Cardiologia Esportiva & Medicina Funcional Integrativa',
  address: 'Rua Paraíba, 1465, Sala 801 — Savassi, Belo Horizonte - MG',
  phoneDisplay: '(31) 98326-9806',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Rua+Paraiba+1465+Sala+801+Savassi+Belo+Horizonte+MG',
};

export const HERO_DATA = {
  eyebrow: 'PROGRAMA EXCLUSIVO DE SAÚDE INTEGRAL E LONGEVIDADE',
  headline:
    'Programa de Emagrecimento Consciente: elimine gordura preservando massa muscular, sem efeito sanfona.',
  subheadline:
    'Uma abordagem médica que une Cardiologia Esportiva, Medicina Funcional Integrativa, Bioimpedância e Nutrição para investigar a causa real do sobrepeso — presencial em BH ou online.',
  quote:
    '“Não é só sobre emagrecer, é sobre fazer as pazes com seu corpo, sua saúde e ter um plano que funciona de verdade.”',
  ctaLabel: 'Falar com a equipe no WhatsApp',
};

export const TARGET_AUDIENCE: string[] = [
  'Para quem já tentou dietas restritivas ou medicações e acabou sofrendo com o reganho de peso (efeito sanfona).',
  'Para quem sente o metabolismo lento ou cansaço constante e busca investigar causas hormonais, inflamatórias e do sono.',
  'Para quem quer segurança cardiológica e orientação médica para treinar preservando ou ganhando massa magra.',
  'Para quem deseja resultados sustentáveis, com um plano médico em 3 fases que acompanha da perda à estabilização.',
];

export const PILLARS: Pillar[] = [
  {
    number: '01',
    title: 'Investigação Clínica & Causa Real',
    description:
      'Avaliação clínica e laboratorial detalhada para identificar disfunções metabólicas, hormonais ou inflamatórias que dificultam a perda de peso.',
  },
  {
    number: '02',
    title: 'Cardiologia Esportiva & Exercício Seguro',
    description:
      'Exames cardiológicos criteriosos e orientações médicas personalizadas para praticar atividade física com proteção cardíaca e foco na massa magra.',
  },
  {
    number: '03',
    title: 'Bioimpedância & Dados Concretos',
    description:
      'Monitoramento tecnológico da composição corporal, assegurando que o corpo elimine gordura enquanto preserva a musculatura ativa.',
  },
  {
    number: '04',
    title: 'Nutrição Integrada & Saúde Emocional',
    description:
      'Consultas nutricionais online com foco anti-inflamatório, aliadas ao manejo do sono, controle da ansiedade e avaliação emocional.',
  },
];

export const PHASE1_CONSULTATIONS: ConsultationStep[] = [
  {
    badge: '1ª CONSULTA',
    title: 'Início do Tratamento & Diagnóstico',
    subtitle: 'Mapeamento clínico completo',
    accentColor: 'border-t-brand-navy',
    items: [
      'Avaliação clínica e laboratorial completa',
      'Bioimpedância para análise detalhada da composição corporal',
      'Avaliação de suplementação para otimizar metabolismo e vitalidade',
      'Prescrição médica personalizada de medicações e suplementos funcionais',
      'Início imediato da Dieta 1 (anti-inflamatória)',
      'Pedidos de exames cardiológicos para iniciar atividade física com segurança',
    ],
  },
  {
    badge: '2ª CONSULTA',
    title: 'Evolução & Hipertrofia',
    subtitle: 'Após 1 mês de acompanhamento',
    accentColor: 'border-t-brand-gold-bright',
    items: [
      'Ajuste de medicação conforme a resposta metabólica observada',
      'Avaliação dos exames cardiológicos realizados',
      'Orientação médica para atividade física e ganho de massa muscular',
      'Nova bioimpedância para monitorar a evolução dos índices corporais',
      'Avaliação de suplementação para hipertrofia muscular',
      'Consulta nutricional online para dieta específica ao tratamento',
    ],
  },
  {
    badge: '3ª CONSULTA',
    title: 'Consolidação & Emoção',
    subtitle: 'Após 2 meses de acompanhamento',
    accentColor: 'border-t-brand-slate',
    items: [
      'Nova avaliação clínica e reavaliação laboratorial completa',
      'Ajuste fino das medicações em uso',
      'Monitoramento contínuo da composição corporal por bioimpedância',
      'Questionário psicológico para mapear a relação emocional com o alimento',
      'Suporte especializado para sono e controle da ansiedade',
      'Consulta nutricional online de consolidação (e indicação de psicoterapia, se necessário)',
    ],
  },
];

export const CONSOLIDATION_PHASES = [
  {
    phase: '2ª FASE: MANUTENÇÃO',
    title: 'Adaptação à Nova Realidade Metabólica',
    duration: 'Duração de 3 a 6 meses após atingir a perda de peso',
    bullets: [
      'Preservação ativa do tecido muscular conquistado',
      'Continuidade e regularidade dos treinos',
      'Consolidação e melhora dos marcadores laboratoriais',
      'Desmame seguro: avaliação médica para redução gradual de medicações',
      'Ajuste calórico adequado ao novo metabolismo basal',
    ],
  },
  {
    phase: '3ª FASE: GERENCIAMENTO',
    title: 'Longevidade dos Resultados & Rotina Saudável',
    duration: 'Duração proporcional: 1 mês por quilo perdido (ex.: 16 kg = 16 meses)',
    bullets: [
      'Meta evolutiva: redução adicional de 3 a 5% ao ano ou manutenção rigorosa',
      'Continuidade da atividade física como estilo de vida',
      'Avaliação médica periódica da necessidade de medicações',
      'Garantia de vitalidade, tônus e autonomia alimentar a longo prazo',
    ],
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    aspect: 'Foco Principal',
    traditional: 'Apenas o número bruto na balança, com perda de água e músculo.',
    conscious: 'Composição corporal: queima real de gordura e preservação metabólica.',
  },
  {
    aspect: 'Massa Muscular',
    traditional: 'Perda severa de massa magra, flacidez e desaceleração do metabolismo.',
    conscious: 'Estímulo e proteção muscular com bioimpedância e orientação de hipertrofia.',
  },
  {
    aspect: 'Segurança Médica',
    traditional: 'Ausente ou baseada em fórmulas genéricas sem investigar a causa raiz.',
    conscious: 'Acompanhamento cardiológico, clínico, laboratorial e integrativo contínuo.',
  },
  {
    aspect: 'Nutrição & Dieta',
    traditional: 'Restrições severas, fome crônica, fraqueza e punição alimentar.',
    conscious: 'Dieta anti-inflamatória e 2 consultas nutricionais online personalizadas.',
  },
  {
    aspect: 'Pós-Emagrecimento',
    traditional: 'Abandono imediato do paciente, resultando no efeito sanfona.',
    conscious: 'Fases estruturadas de Manutenção (3–6m) e Gerenciamento (1m/kg perdido).',
  },
  {
    aspect: 'Eixo Emocional & Sono',
    traditional: 'Desconsiderado, gerando culpa, ansiedade e compulsão alimentar.',
    conscious: 'Questionário psicológico, suporte ao sono e manejo ativo da ansiedade.',
  },
];

export const DELIVERABLES: DeliverableItem[] = [
  {
    title: '03 Consultas Médicas Especializadas',
    detail: 'Com Dr. Cristiano Miranda (presenciais ou online), investigando a causa real do sobrepeso.',
    benefit: 'Diagnóstico aprofundado e prescrições sob medida.',
  },
  {
    title: '02 Avaliações de Bioimpedância',
    detail: 'Análise tecnológica da composição corporal no início e na evolução do tratamento.',
    benefit: 'Dados concretos de perda de gordura e ganho muscular.',
  },
  {
    title: '02 Consultas Nutricionais Online',
    detail: 'Acompanhamento nutricional individualizado alinhado ao tratamento médico e à sua rotina.',
    benefit: 'Plano alimentar anti-inflamatório, saboroso e viável.',
  },
  {
    title: 'Avaliação Cardiológica, Sono & Emoções',
    detail: 'Exames cardiológicos, perfil sanguíneo completo, questionário psicológico e manejo da ansiedade.',
    benefit: 'Segurança cardiovascular para treinar e controle de compulsões.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'O programa pode ser feito presencialmente ou online?',
    answer:
      'As consultas médicas podem ser realizadas presencialmente no consultório na Savassi (Belo Horizonte) ou por telemedicina, conforme a sua preferência. As 2 consultas nutricionais incluídas no programa são realizadas online.',
  },
  {
    question: 'O tratamento utiliza medicações para emagrecer?',
    answer:
      'Quando clinicamente indicado após a avaliação médica e os exames laboratoriais, o Dr. Cristiano prescreve medicações e suplementos funcionais de forma individualizada, sempre com acompanhamento contínuo e desmame seguro na fase de manutenção.',
  },
  {
    question: 'Como o programa evita o efeito sanfona?',
    answer:
      'Diferente de dietas restritivas que reduzem a massa muscular e derrubam o metabolismo, o programa combina dieta anti-inflamatória, proteção de massa magra e duas fases pós-perda (Manutenção de 3 a 6 meses e Gerenciamento proporcional ao peso eliminado).',
  },
  {
    question: 'Como funciona o primeiro contato para agendar?',
    answer:
      'Ao clicar no botão de WhatsApp desta página, nossa equipe de atendimento já recebe sua solicitação direcionada ao Programa de Emagrecimento Consciente, tira suas dúvidas sobre agenda e valores (incluindo parcelamento) e organiza seu agendamento.',
  },
];
