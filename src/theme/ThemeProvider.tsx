import * as React from "react";
import type { ThemeColors } from "./types";

const themeColors: ThemeColors = {
  primary: "hsl(var(--primary))",
  primaryForeground: "hsl(var(--primary-foreground))",
  secondaryContainer: "hsl(var(--secondary-container))",
  onSecondaryContainer: "hsl(var(--on-secondary-container))",
  ring: "hsl(var(--ring))",
  inversePrimary: "hsl(var(--inverse-primary))",
  onSurface: "hsl(var(--on-surface))",
  onSurfaceVariant: "hsl(var(--on-surface-variant))",
  outline: "hsl(var(--outline))",
  surfaceContainer: "hsl(var(--surface-container))",
  success: "hsl(var(--success))",
  destructive: "hsl(var(--destructive))",
};

const ThemeContext = React.createContext<ThemeColors>(themeColors);

export function useThemeColors(): ThemeColors {
  return React.useContext(ThemeContext);
}

export function useTheme() {
  const colors = useThemeColors();
  return { colors, isDark: false, preset: "blue", setPreset: () => {}, presets: [] };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={themeColors}>
      {children}
    </ThemeContext.Provider>
  );
}
