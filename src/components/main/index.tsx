import * as S from './styles';

import Footer from '../footer';
import Content from '../content';
import Header from '../header';

export default function Main() {
  return (
    <S.AppWrapper>
      <Header />
      <Content />
      <Footer />
    </S.AppWrapper>
  );
}
