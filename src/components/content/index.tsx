import { useContext } from 'react';

import { ThemesContext } from '../../contexts/themes/index';
import * as S from './styles';

export default function Content() {
  const { toggleTheme } = useContext(ThemesContext);

  return (
    <S.ContentWrapper>
      Conteúdo boladão
      <S.ButtonTheme onClick={toggleTheme}>Change Theme</S.ButtonTheme>
    </S.ContentWrapper>
  );
}
