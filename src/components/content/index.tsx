import { useEffect, useState } from 'react';
import { themes } from '../../contexts/themes/index';
import * as S from './styles';

export default function Content() {
  const [defaultTheme] = useState(themes.default);
  const changeTheme = () => (defaultTheme === 'dark' ? 'light' : 'dark');

  return (
    <S.ContentWrapper>
      Conteúdo boladão
      <S.ButtonTheme onClick={changeTheme}>Change Theme</S.ButtonTheme>
    </S.ContentWrapper>
  );
}
