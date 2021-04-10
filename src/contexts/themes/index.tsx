import { createContext } from 'react';

type IThemes = {
  dark: IThemesValues;
  default: 'dark' | 'light';
  light: IThemesValues;
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
  default: 'dark',
  light: {
    bg: '#e6e7e7',
    color: '#333',
  },
};

export const ThemesContext = createContext<IThemes>(themes);
