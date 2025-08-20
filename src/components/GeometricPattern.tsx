interface GeometricPatternProps {
  className?: string;
  variant?: 'subtle' | 'normal' | 'prominent';
}

const GeometricPattern = ({ className = "", variant = 'normal' }: GeometricPatternProps) => {
  const opacityMultiplier = {
    subtle: 0.3,
    normal: 1,
    prominent: 1.5
  }[variant];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Primary geometric rings - positioned with valid CSS */}
      <div 
        className="absolute w-80 h-80 rounded-full border border-border/10 animate-rotate-slow" 
        style={{ 
          top: '16.67%', 
          left: '16.67%',
          opacity: 0.1 * opacityMultiplier
        }} 
      />
      <div 
        className="absolute w-72 h-72 rounded-full border border-border/15 animate-rotate-slow" 
        style={{ 
          top: '16.67%', 
          left: '16.67%',
          animationDirection: 'reverse', 
          animationDuration: '30s',
          opacity: 0.15 * opacityMultiplier
        }} 
      />
      <div 
        className="absolute w-64 h-64 rounded-full border border-border/20 animate-rotate-slow" 
        style={{ 
          top: '16.67%', 
          left: '16.67%',
          animationDuration: '25s',
          opacity: 0.2 * opacityMultiplier
        }} 
      />
      
      {/* Secondary accent rings */}
      <div 
        className="absolute w-48 h-48 rounded-full border border-primary/20 animate-rotate-slow" 
        style={{ 
          top: '66.67%', 
          right: '20%',
          animationDirection: 'reverse', 
          animationDuration: '35s',
          opacity: 0.2 * opacityMultiplier
        }} 
      />
      <div 
        className="absolute w-40 h-40 rounded-full border border-primary/15 animate-rotate-slow" 
        style={{ 
          top: '66.67%', 
          right: '20%',
          animationDuration: '28s',
          opacity: 0.15 * opacityMultiplier
        }} 
      />
      
      {/* Floating accent elements - reduced animation on mobile */}
      <div 
        className="absolute w-6 h-6 rounded-full bg-primary/30 animate-pulse-glow hidden md:block" 
        style={{ 
          top: '33.33%', 
          right: '25%',
          animationDelay: '1s',
          opacity: 0.3 * opacityMultiplier
        }} 
      />
      <div 
        className="absolute w-4 h-4 rounded-full bg-primary/20 animate-pulse-glow hidden md:block" 
        style={{ 
          top: '50%', 
          left: '33.33%',
          animationDelay: '2s',
          opacity: 0.2 * opacityMultiplier
        }} 
      />
      <div 
        className="absolute w-8 h-8 rounded-full bg-primary/25 animate-pulse-glow hidden md:block" 
        style={{ 
          bottom: '33.33%', 
          left: '20%',
          animationDelay: '3s',
          opacity: 0.25 * opacityMultiplier
        }} 
      />
      
      {/* Organized grid pattern */}
      <div 
        className="absolute inset-0 pattern-dots" 
        style={{ opacity: 0.15 * opacityMultiplier }} 
      />
      
      {/* Layered gradient overlays for depth */}
      <div 
        className="absolute w-1/3 h-1/3 bg-gradient-radial animate-float" 
        style={{ 
          top: '0%', 
          left: '0%',
          opacity: 0.6 * opacityMultiplier
        }} 
      />
      <div 
        className="absolute w-1/4 h-1/4 bg-gradient-radial animate-float" 
        style={{ 
          top: '50%', 
          right: '0%',
          animationDelay: '2s',
          opacity: 0.4 * opacityMultiplier
        }} 
      />
      <div 
        className="absolute w-1/3 h-1/3 bg-gradient-radial animate-float" 
        style={{ 
          bottom: '0%', 
          left: '33.33%',
          animationDelay: '4s',
          opacity: 0.3 * opacityMultiplier
        }} 
      />
      
      {/* Subtle connecting lines */}
      <div 
        className="absolute w-px h-32 bg-gradient-to-b from-transparent via-border/20 to-transparent hidden lg:block" 
        style={{ 
          top: '25%', 
          left: '25%',
          transform: 'rotate(45deg)',
          opacity: 0.5 * opacityMultiplier
        }} 
      />
      <div 
        className="absolute w-px h-24 bg-gradient-to-b from-transparent via-border/15 to-transparent hidden lg:block" 
        style={{ 
          top: '50%', 
          right: '33.33%',
          transform: 'rotate(-30deg)',
          opacity: 0.4 * opacityMultiplier
        }} 
      />
    </div>
  );
};

export default GeometricPattern;