import { SearchForm } from '../../../components/SearcForm/SearchForm'
import {
  Container,
  Content,
  PriceHighlight,
  Title,
  TransactionsTable,
} from './styles'

export function HistoricoCompras() {
  return (
    <Container>
      <Title>Compras</Title>
      <SearchForm />
      <TransactionsTable>
        <tbody>
          <tr>
            <td>#01</td>

            <td>13/04/2022</td>
            <td>R$ 50,00</td>
            <td>
              <PriceHighlight variant="income">Ver recibo</PriceHighlight>
            </td>
          </tr>
          <tr>
            <td>#02</td>
            <td>10/04/2022</td>
            <td>R$ 50,00</td>
            <td>
              <PriceHighlight variant="outcome">Ver recibo</PriceHighlight>
            </td>
          </tr>
          <tr>
            <td>#02</td>
            <td>10/04/2022</td>
            <td>R$ 50,00</td>
            <td>
              <PriceHighlight variant="outcome">Ver recibo</PriceHighlight>
            </td>
          </tr>
          <tr>
            <td>#02</td>
            <td>10/04/2022</td>
            <td>R$ 50,00</td>
            <td>
              <PriceHighlight variant="outcome">Ver recibo</PriceHighlight>
            </td>
          </tr>
          <tr>
            <td>#02</td>
            <td>10/04/2022</td>
            <td>R$ 50,00</td>
            <td>
              <PriceHighlight variant="outcome">Ver recibo</PriceHighlight>
            </td>
          </tr>
          <tr>
            <td>#02</td>
            <td>10/04/2022</td>
            <td>R$ 50,00</td>
            <td>
              <PriceHighlight variant="outcome">Ver recibo</PriceHighlight>
            </td>
          </tr>
          <tr>
            <td>#02</td>
            <td>10/04/2022</td>
            <td>R$ 50,00</td>
            <td>
              <PriceHighlight variant="outcome">Ver recibo</PriceHighlight>
            </td>
          </tr>
        </tbody>
      </TransactionsTable>
    </Container>
  )
}
