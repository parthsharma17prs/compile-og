import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'blend' | 'glow';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}

const Section = ({ 
  children, 
  className = "", 
  variant = 'default',
  spacing = 'lg'
}: SectionProps) => {
  const spacingClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20',
    xl: 'py-32'
  };

  const variantClasses = {
    default: '',
    blend: 'bg-blend',
    glow: 'section-glow'
  };

  return (
    <section className={cn(
      'relative',
      spacingClasses[spacing],
      variantClasses[variant],
      className
    )}>
      {children}
    </section>
  );
};

export default Section;