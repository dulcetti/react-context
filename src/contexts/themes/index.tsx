import { createContext } from 'react';

type IThemes = {
  dark: IThmemesValues;
  light: IThmemesValues;
};

type IThmemesValues = {
  bg: string;
  color: string;
};

export const themes: IThemes = {
  dark: {
    bg: '#333',
    color: '#e6e7e7',
  },
  light: {
    bg: '#e6e7e7',
    color: '#333',
  },
};

export const ThemesContext = createContext<IThmemesValues>(themes.dark);
