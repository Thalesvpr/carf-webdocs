export interface ThemePresetValues {
  "--primary": string;
  "--primary-foreground": string;
  "--secondary-container": string;
  "--on-secondary-container": string;
  "--ring": string;
  "--inverse-primary": string;
}

export interface ThemePreset {
  key: string;
  label: string;
  displayColor: string;
  light: ThemePresetValues;
  dark: ThemePresetValues;
}

export interface ThemeColors {
  primary: string;
  primaryForeground: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  ring: string;
  inversePrimary: string;
  onSurface: string;
  onSurfaceVariant: string;
  outline: string;
  surfaceContainer: string;
  success: string;
  destructive: string;
}
