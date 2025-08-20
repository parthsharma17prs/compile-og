import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative w-12 h-12 rounded-full border border-border/20 bg-background/50 backdrop-blur-sm" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-12 h-12 rounded-full border border-border/20 bg-background/50 backdrop-blur-sm hover:bg-background/80 hover:shadow-glow transition-all duration-500 group overflow-hidden p-0"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Enhanced animated background glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Enhanced sun icon */}
      <Sun
        className={`absolute h-5 w-5 text-primary transition-all duration-700 ease-out ${
          isDark 
            ? "rotate-180 scale-0 opacity-0" 
            : "rotate-0 scale-100 opacity-100"
        }`}
      />
      
      {/* Enhanced moon icon */}
      <Moon
        className={`absolute h-5 w-5 text-primary transition-all duration-700 ease-out ${
          isDark 
            ? "rotate-0 scale-100 opacity-100" 
            : "-rotate-180 scale-0 opacity-0"
        }`}
      />
      
      {/* Enhanced rotating border effect */}
      <div className="absolute inset-0 rounded-full border border-primary/30 animate-rotate-slow opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
      
      {/* Inner pulse effect */}
      <div className="absolute inset-2 rounded-full bg-primary/5 animate-pulse-glow" />
    </Button>
  );
};

export default ThemeToggle;