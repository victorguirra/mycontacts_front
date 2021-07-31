import { Container, InputSeachContainer } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" />

      <InputSeachContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSeachContainer>
    </Container>
  );
}
