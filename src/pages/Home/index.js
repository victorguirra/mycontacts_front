import { Link } from 'react-router-dom';
import {
  Container, InputSeachContainer, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      <InputSeachContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSeachContainer>

      <Header>
        <strong>3 contatos</strong>

        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Victor Guirra</strong>
              <small>instagram</small>
            </div>

            <span>guirradev@mail.com</span>

            <span>(61) 99999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>

            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}

fetch('http://localhost:3000')
  .then((response) => {
    console.log('response', response);
  })
  .catch((error) => {
    console.log('Erro', error);
  });
