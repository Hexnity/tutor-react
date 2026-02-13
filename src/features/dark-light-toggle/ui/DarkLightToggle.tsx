import { Moon, Sun } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { useTheme } from '../lib/use-theme';

interface DarkLightToggleProps {
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  showLabel?: boolean;
}

export function DarkLightToggle({ 
  variant = 'ghost', 
  size = 'icon',
  showLabel = false 
}: DarkLightToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="transition-colors"
    >
      {theme === 'light' ? (
        <>
          <Moon className="h-[1.2rem] w-[1.2rem]" />
          {showLabel && <span className="ml-2">Dark Mode</span>}
        </>
      ) : (
        <>
          <Sun className="h-[1.2rem] w-[1.2rem]" />
          {showLabel && <span className="ml-2">Light Mode</span>}
        </>
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
