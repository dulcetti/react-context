import { createContext } from 'react';

type IThemes = {
  dark?: IThemesValues;
  light?: IThemesValues;
  theme: 'dark' | 'light';
  toggleTheme?: () => void;
};

type IThemesValues = {
  bg: string;
  color: string;
};

export const themes: IThemes = {
  dark: {
    bg: '#333',
    color: '#e6e7e7',
  },
  theme: 'dark',
  light: {
    bg: '#e6e7e7',
    color: '#333',
  },
};

export const ThemesContext = createContext<IThemes>(themes);
