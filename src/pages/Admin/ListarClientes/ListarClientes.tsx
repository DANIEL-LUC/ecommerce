import { SearchForm } from '../../../components/SearcForm/SearchForm'
import {
  Container,
  Content,
  PriceHighlight,
  Title,
  TransactionsTable,
} from './styles'

export function ListarClientes() {
  return (
    <Container>
      <Title>Clientes</Title>
      <SearchForm />
      <TransactionsTable>
        <tbody>
          <tr>
            <td>#01</td>
            <td>Roberto@gmail.com</td>
            <td>
              <PriceHighlight variant="income">Roberto Silva</PriceHighlight>
            </td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Maria@gmail.com</td>
            <td>
              <PriceHighlight variant="outcome">Maria Silva</PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>10/04/2022</td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Maria@gmail.com</td>
            <td>
              <PriceHighlight variant="outcome">Maria Silva</PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>10/04/2022</td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Maria@gmail.com</td>
            <td>
              <PriceHighlight variant="outcome">Maria Silva</PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>10/04/2022</td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Maria@gmail.com</td>
            <td>
              <PriceHighlight variant="outcome">Maria Silva</PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>10/04/2022</td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Maria@gmail.com</td>
            <td>
              <PriceHighlight variant="outcome">Maria Silva</PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>10/04/2022</td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Maria@gmail.com</td>
            <td>
              <PriceHighlight variant="outcome">Maria Silva</PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>10/04/2022</td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Maria@gmail.com</td>
            <td>
              <PriceHighlight variant="outcome">Maria Silva</PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>10/04/2022</td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Maria@gmail.com</td>
            <td>
              <PriceHighlight variant="outcome">Maria Silva</PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>10/04/2022</td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Maria@gmail.com</td>
            <td>
              <PriceHighlight variant="outcome">Maria Silva</PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>10/04/2022</td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Maria@gmail.com</td>
            <td>
              <PriceHighlight variant="outcome">Maria Silva</PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>10/04/2022</td>
          </tr>
        </tbody>
      </TransactionsTable>
    </Container>
  )
}
