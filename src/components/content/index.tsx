import { useState } from 'react';
import { themes } from '../../contexts/themes/index';
import * as S from './styles';

export default function Content() {
  const [defaultTheme, changeDefaultTheme] = useState(themes.default);
  const changeTheme = () => {
    const newTheme = 'dark' ? 'light' : 'dark';
    changeDefaultTheme(newTheme);
  };

  return (
    <S.ContentWrapper>
      Conteúdo boladão
      <S.ButtonTheme onClick={changeTheme}>Change Theme</S.ButtonTheme>
    </S.ContentWrapper>
  );
}
