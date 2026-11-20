export const WHATSAPP_NUMBER = '5531983269806';

export const WHATSAPP_MESSAGES = {
  emagrecimento:
    'Olá! Quero entender como funciona o Programa de Emagrecimento Consciente do Dr. Cristiano Miranda.',
} as const;

export function getWhatsAppUrl(specialty: keyof typeof WHATSAPP_MESSAGES): string {
  const text = encodeURIComponent(WHATSAPP_MESSAGES[specialty]);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackWhatsAppClick(
  specialty: keyof typeof WHATSAPP_MESSAGES,
  ctaLocation: string
): void {
  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: 'whatsapp_lead_click',
      specialty,
      cta_location: ctaLocation,
    });
  }
}
