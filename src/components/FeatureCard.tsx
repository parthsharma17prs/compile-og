import React from "react";
import { cn } from "@/lib/utils";

export type FeatureType = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: React.ReactNode;
};

export type FeatureCardProps = React.ComponentProps<"div"> & {
  feature: FeatureType;
  hideDescription?: boolean;
};

export function FeatureCard({ feature, className, hideDescription, ...props }: FeatureCardProps) {
  const pattern = genRandomPattern();

  return (
    <div className={cn("relative overflow-hidden p-6 border bg-background/60", className)} {...props}>
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="from-foreground/5 to-foreground/1 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={pattern}
            className="fill-foreground/5 stroke-foreground/25 absolute inset-0 h-full w-full mix-blend-overlay"
          />
        </div>
      </div>
      <feature.icon className="text-foreground/75 size-6" strokeWidth={1} aria-hidden />
      <h3 className="mt-6 text-sm md:text-base font-medium">{feature.title}</h3>
      {!hideDescription && feature.description && (
        <div className="relative z-20 mt-2 text-xs md:text-sm font-light text-foreground/70">
          {feature.description}
        </div>
      )}
    </div>
  );
}

type GridPatternProps = React.ComponentProps<"svg"> & {
  width: number;
  height: number;
  x: string;
  y: string;
  squares?: number[][];
};

function GridPattern({ width, height, x, y, squares, ...props }: GridPatternProps) {
  const patternId = React.useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy], index) => (
            <rect
              strokeWidth={0}
              key={index}
              width={width + 1}
              height={height + 1}
              x={sx * width}
              y={sy * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

function genRandomPattern(length?: number): number[][] {
  const size = length ?? 5;
  return Array.from({ length: size }, () => [
    Math.floor(Math.random() * 4) + 7, // random x between 7 and 10
    Math.floor(Math.random() * 6) + 1, // random y between 1 and 6
  ]);
}
