import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  centered?: boolean;
}

const SectionHeader = ({ 
  title, 
  subtitle, 
  description, 
  children, 
  className = "",
  centered = true 
}: SectionHeaderProps) => {
  return (
    <div className={cn(
      'relative mb-16',
      centered && 'text-center',
      className
    )}>
      {subtitle && (
        <p className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
          {subtitle}
        </p>
      )}
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
        {title}
      </h2>
      
      {description && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
      
      {children}
      
      {/* Decorative divider */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 gradient-divider" />
    </div>
  );
};

export default SectionHeader;