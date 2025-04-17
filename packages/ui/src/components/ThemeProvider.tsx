import React, { createContext, useContext, useEffect, useState } from 'react';
import { theme as defaultTheme, Theme, ColorScheme } from '../theme';

interface ThemeContextValue {
  theme: Theme;
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  theme?: Theme;
  defaultColorScheme?: ColorScheme;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme = defaultTheme,
  defaultColorScheme = 'light',
  children,
}) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(defaultColorScheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateScheme = (e: MediaQueryListEvent | MediaQueryList) => {
      setColorScheme(e.matches ? 'dark' : 'light');
    };

    // Set initial value
    updateScheme(mediaQuery);

    // Listen for changes
    mediaQuery.addEventListener('change', updateScheme);
    return () => mediaQuery.removeEventListener('change', updateScheme);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Update document classes
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(colorScheme);
    }
  }, [colorScheme, mounted]);

  // During SSR, just render with the default color scheme
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme, colorScheme: defaultColorScheme, setColorScheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, colorScheme, setColorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 