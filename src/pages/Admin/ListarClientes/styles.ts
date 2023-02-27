import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  padding: 2rem;
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 2rem;
`

export const Content = styled.div`
  color: black;
  background: ${(props) => props.theme['gray-300']};
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`
export const Title = styled.div`
  text-align: center;
  color: ${(props) => props.theme['gray-600']};
  font-size: 40px;
  justify-content: center;
`
export const PriceHighlight = styled.span`
  color: ${(props) => props.theme['green-300']};
`
