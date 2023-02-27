import { useForm } from 'react-hook-form'
import {
  Container,
  ContainerButton,
  ContainerColumn,
  ContainerForm,
  ContainerInput,
  Content,
  FormContainer,
  Input,
  Line,
  Link,
  LinkAdmin,
  Select,
  Table,
} from './styles'

export function AlterarSenha() {
  const { register, handleSubmit } = useForm()
  return (
    <Container>
      <Content>
        <span>Alterar Senha</span>

        <Line />
        <ContainerForm>
          <ContainerInput>
            Senha Atual*
            <Input type="email" placeholder="senha atual" />
          </ContainerInput>
          <ContainerInput>
            Nova Senha*
            <Input type="email" placeholder="nova senha" />
          </ContainerInput>
          <ContainerInput>
            Repetir Nova Senha*
            <Input type="email" placeholder="repetir senha" />
          </ContainerInput>

          <ContainerButton>
            <Link href="/">Confirmar</Link>
          </ContainerButton>
        </ContainerForm>
      </Content>
    </Container>
  )
}
