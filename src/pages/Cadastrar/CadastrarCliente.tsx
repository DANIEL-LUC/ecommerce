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

export function CadastrarCliente() {
  const { register, handleSubmit } = useForm()
  return (
    <Container>
      <Content>
        <span>Cadastro</span>
        <ContainerForm>
          {/* <Table>
          <tbody>
            <tr>
              <td>
                {'zssssssssssssssssssssssssssssssssssssz'}
                <Input type="text" placeholder="nome" />
              </td>
              <td>
                {' Nome'}
                <Input type="text" placeholder="nome" />
              </td>
            </tr>
          </tbody>
        </Table> */}

          <ContainerColumn>
            <div>
              Nome
              <Input type="text" placeholder="nome" />
            </div>
            <div>
              Data de Nascimento
              <Input type="Date" placeholder="Data de Nascimento" />
            </div>
            <div>
              Genêro
              <Select type="text" placeholder="Genêro">
                <option value="feminino">feminino</option>
                <option value="masculino">masculino</option>
              </Select>
            </div>
            <div>
              Tipo de telefone
              <Select type="text" placeholder="tipo_telefone">
                <option value="feminino">fixo</option>
                <option value="masculino">móvel</option>
              </Select>
            </div>
            <div>
              DDD
              <Input type="text" placeholder="DDD" />
            </div>
            <div>
              Número
              <Input type="number" placeholder="Número" />
            </div>
          </ContainerColumn>
          <ContainerInput>
            E-mail
            <Input type="email" placeholder="e-mail" />
          </ContainerInput>

          <Line />
          <span>Endereço</span>
          <ContainerColumn>
            <div>
              Tipo Residência
              <Select type="text" placeholder="Tipo Residência">
                <option value="Casa">Casa</option>
                <option value="Apartamento">Apartamento</option>
              </Select>
            </div>
            <div>
              Tipo Logradouro
              <Select type="text" placeholder="Tipo Logradouro">
                <option value="Avenida">Avenida</option>
                <option value="Rua">Rua</option>
              </Select>
            </div>
            <div>
              Logradouro
              <Input type="text" placeholder="Logradouro" />
            </div>
            <div>
              Número
              <Input type="text" placeholder="Número" />
            </div>
          </ContainerColumn>

          <ContainerInput>
            Bairro
            <Input type="bairro" placeholder="Bairro" />
          </ContainerInput>

          <ContainerInput>
            CEP
            <Input type="cep" placeholder="CEP" />
          </ContainerInput>

          <ContainerInput>
            Cidade
            <Input type="cidade" placeholder="Cidade" />
          </ContainerInput>

          <ContainerInput>
            Estado
            <Input type="estado" placeholder="Estado" />
          </ContainerInput>

          <ContainerInput>
            País
            <Input type="pais" placeholder="País" />
          </ContainerInput>

          <Line />
          <span>Cartão de Crédito</span>
          <ContainerColumn>
            <div>
              Número
              <Input type="text" placeholder="Número" />
            </div>
            <div>
              Bandeira
              <Select type="text" placeholder="Bandeira">
                <option value="Mastercard">Mastercard</option>
                <option value="Elo">Elo</option>
                <option value="Hipercard">Hipercard</option>
              </Select>
            </div>
          </ContainerColumn>

          <ContainerInput>
            Bairro
            <Input type="bairro" placeholder="Bairro" />
          </ContainerInput>

          <ContainerInput>
            Nome
            <Input type="cep" placeholder="Nome (Como está no cartão)" />
          </ContainerInput>

          <ContainerInput>
            CPF
            <Input type="CPF" placeholder="CPF do proprietário do cartão" />
          </ContainerInput>

          <ContainerInput>
            CVV
            <Input type="estado" placeholder="CVV" />
          </ContainerInput>

          <ContainerButton>
            <Link href="/">Cadastrar</Link>
          </ContainerButton>
        </ContainerForm>
      </Content>
    </Container>
  )
}
