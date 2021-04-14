import { useContext } from 'react';

import { ThemesContext } from '../../contexts/themes/index';
import * as S from './styles';

export default function Content() {
  const { actual } = useContext(ThemesContext);
  const changeTheme = () => {
    actual = 'dark' ? 'light' : 'dark';
  };

  return (
    <S.ContentWrapper>
      Conteúdo boladão
      <S.ButtonTheme onClick={changeTheme}>Change Theme</S.ButtonTheme>
    </S.ContentWrapper>
  );
}
