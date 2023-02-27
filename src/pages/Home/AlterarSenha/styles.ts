import styled from 'styled-components'

export const Container = styled.main`
  flex: 1;

  background: ${(props) => props.theme.secundaria};
  padding-top: 4rem;
`
export const Content = styled.div`
  width: 80%;
  max-width: 1120px;

  margin-bottom: 40rem;
  margin: auto;
  background: ${(props) => props.theme['gray-600']};

  border-radius: 12px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 48px;
`

export const ContainerForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;

  gap: 1rem;
  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;
    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['green-300']};
    font-weight: bold;
    border-radius: 6px;
    &:hover {
      background: ${(props) => props.theme['green-500']};
      border-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`
export const ContainerButton = styled.div`
  margin-top: 4rem;
  justify-content: center;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`
export const Link = styled.a`
  width: 20rem;
  font: 400 1rem Roboto, sans-serif;
  text-decoration: none;
  color: ${(props) => props.theme['green-300']};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 1rem;
  background: transparent;
  border: 1px solid ${(props) => props.theme['green-300']};
  color: ${(props) => props.theme['green-300']};
  font-weight: bold;
  border-radius: 6px;
  &:hover {
    background: ${(props) => props.theme['green-500']};
    border-color: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  }
`
export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  tr {
    width: 50%;
  }
  td {
    padding: 1.25rem 2rem;
    font-size: 28px;
  }
`

export const Input = styled.input`
  flex: 1;
  border-radius: 6px;
  border: 0;
  background: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-300']};
  padding: 1rem;
  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`
export const ContainerColumn = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  div {
    font-size: 18px;
    display: grid;
    gap: 0.5rem;
  }
`

export const Select = styled.select`
  width: 100%;
  flex: 1;
  border-radius: 6px;
  border: 0;
  background: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-300']};
  padding: 1rem;
  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`
export const ContainerInput = styled.div`
  width: 60%;
  margin-top: 0.5rem;
  padding: 0 1.5rem;

  font-size: 18px;
  display: grid;
  gap: 0.5rem;
`
export const Line = styled.div`
  margin-bottom: 4rem;
  width: 100%;
  height: 1px;
  border-top: 1px;
  background: white;
`
