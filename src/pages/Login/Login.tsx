import { Home } from '../Home'
import {
  Container,
  ContainerButton,
  ContainerForm,
  Content,
  Link,
  LinkAdmin,
} from './styles'

export function Login() {
  return (
    <Container>
      <Content>
        <span>Login</span>
        <ContainerForm action={'http://localhost/Home/'}>
          <input type="text" placeholder="e-mail" />
          <input type="text" placeholder="senha" />
          <ContainerButton>
            <button type="submit">Entrar</button>{' '}
            <Link href="/CadastrarCliente">Cadastrar</Link>
          </ContainerButton>
        </ContainerForm>
        <LinkAdmin target="_blank" href="/Admin">
          Admin
        </LinkAdmin>
      </Content>
    </Container>
  )
}
