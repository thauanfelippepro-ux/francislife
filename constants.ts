
import { Product } from './types';

export const BRAND_NAME = "Francis Life";
export const BRAND_TAGLINE = "Skin Protocol";

export const STRATEGY_CONTEXT = `
Contexto da Marca Francis Life - Skin Protocol:
- Nome: Francis Life Skin Protocol
- Tagline: Tratamento diário com linguagem clínica contemporânea.
- Conceito: Não é apenas um cosmético, é um sistema de tratamento. A pele responde melhor a ativos corretos, no momento certo, com constância.
- Filosofia: Organiza o cuidado, reduz excessos, orienta o uso correto.
- Identidade Visual: Design clínico contemporâneo. Frascos conta-gotas de 30ml. Cores guias: Laranja (Dia), Azul Profundo (Noite), Verde Clínico (Acne), Roxo (Melasma).
- Produtos (Protocolos):
  1. Protocolo Dia: Proteção e Preparação.
  2. Protocolo Noite: Regeneração Noturna.
  3. Protocolo Acne: Controle Cutâneo.
  4. Protocolo Melasma: Uniformização Progressiva.
`;

export const PRODUCTS: Product[] = [
  {
    id: 'day',
    name: 'Protocolo Dia',
    tagline: 'Proteção e Preparação Cutânea',
    description: 'Preparar a pele para as agressões diárias, auxiliando na proteção, equilíbrio e manutenção da barreira cutânea.',
    indication: 'Uso diário, durante o dia. Para todos os tipos de pele.',
    benefits: [
      'Auxilia na proteção contra estressores externos',
      'Contribui para o equilíbrio da pele ao longo do dia',
      'Mantém a pele preparada para maquiagem'
    ],
    usage: 'Aplicar pela manhã, sobre a pele limpa e seca, antes do protetor solar.',
    keywords: ['Defesa', 'Equilíbrio', 'Barreira'],
    color: 'bg-[#D96B21]', // Updated Brand Orange
    accentColor: 'text-white',
    mood: 'light', // Semantic mood for tags (Day Use), but color is now saturated
    image: '/assets/serum-dia.jpg' 
  },
  {
    id: 'night',
    name: 'Protocolo Noite',
    tagline: 'Regeneração Noturna',
    description: 'Atuar durante o período de descanso da pele, auxiliando nos processos naturais de regeneração cutânea.',
    indication: 'Uso noturno. Para todos os tipos de pele.',
    benefits: [
      'Auxilia na recuperação da pele',
      'Contribui para a renovação cutânea',
      'Apoia os mecanismos naturais de reparação'
    ],
    usage: 'Aplicar à noite, sobre a pele limpa e seca, antes do descanso.',
    keywords: ['Regeneração', 'Renovação', 'Descanso'],
    color: 'bg-[#1B3558]', // Updated Navy
    accentColor: 'text-white', 
    mood: 'dark', 
    image: '/assets/serum-noite.jpg'
  },
  {
    id: 'acne',
    name: 'Protocolo Acne',
    tagline: 'Controle Cutâneo',
    description: 'Auxiliar no controle da oleosidade e das imperfeições, respeitando a barreira natural da pele.',
    indication: 'Peles oleosas e acneicas. Uso diário.',
    benefits: [
      'Auxilia no controle da oleosidade',
      'Contribui para a aparência de poros equilibrados',
      'Ajuda a manter a pele limpa sem ressecar'
    ],
    usage: 'Aplicar sobre a pele limpa, uma ou duas vezes ao dia, conforme necessidade.',
    keywords: ['Controle', 'Poros', 'Equilíbrio'],
    color: 'bg-[#256958]', // Updated Clinical Green
    accentColor: 'text-white',
    mood: 'clinical',
    image: '/assets/serum-acne.jpg'
  },
  {
    id: 'melasma',
    name: 'Protocolo Melasma',
    tagline: 'Uniformização Progressiva',
    description: 'Auxiliar na uniformização do tom da pele, respeitando a sensibilidade cutânea e o uso contínuo.',
    indication: 'Peles com manchas e hiperpigmentação. Uso contínuo.',
    benefits: [
      'Contribui para a uniformização progressiva',
      'Auxilia na aparência de manchas',
      'Tratamento gradual e seguro'
    ],
    usage: 'Aplicar conforme orientação, associado ao uso diário de fotoproteção.',
    keywords: ['Uniformização', 'Gradual', 'Seguro'],
    color: 'bg-[#7A3558]', // Updated Plum/Mauve
    accentColor: 'text-white',
    mood: 'soft',
    image: '/assets/serum-melasma.jpg'
  }
];
