import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, trackWhatsAppClick } from '../utils/tracking';

interface WhatsAppCTAProps {
  label?: string;
  location: string;
  variant?: 'gold' | 'navy';
  fullWidth?: boolean;
  className?: string;
}

export const WhatsAppCTA: React.FC<WhatsAppCTAProps> = ({
  label = 'Falar com a equipe no WhatsApp',
  location,
  variant = 'gold',
  fullWidth = false,
  className = '',
}) => {
  const href = getWhatsAppUrl('emagrecimento');

  const baseStyles =
    'inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-4 text-sm sm:text-base font-bold transition-all duration-200 shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles =
    variant === 'gold'
      ? 'bg-brand-gold-bright text-brand-navy hover:bg-[#ffc646] focus:ring-brand-gold-bright shadow-brand-gold-bright/20'
      : 'bg-brand-navy text-white hover:bg-brand-navy-dark focus:ring-brand-navy shadow-brand-navy/20';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick('emagrecimento', location)}
      className={`${baseStyles} ${variantStyles} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <MessageCircle className="h-5 w-5 shrink-0" />
      <span>{label}</span>
    </a>
  );
};
