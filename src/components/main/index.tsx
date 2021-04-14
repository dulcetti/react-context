import { useState } from 'react';

import * as S from './styles';

import { themes, ThemesContext } from '../../contexts/themes';
import Footer from '../footer';
import Content from '../content';
import Header from '../header';

export default function Main() {
  const [theme, setTheme] = useState(themes.theme);

  const toggleTheme = () => {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
  };

  const appStyle = {
    backgroundColor: themes[theme]?.bg,
    color: themes[theme]?.color,
    height: '100vh',
    margin: '0',
  };

  return (
    <ThemesContext.Provider value={{ theme, toggleTheme }}>
      <S.AppWrapper style={appStyle}>
        <Header />
        <Content />
        <Footer />
      </S.AppWrapper>
    </ThemesContext.Provider>
  );
}
