import styled from 'styled-components'

export const Content = styled.main`
  width: 50%;
  max-width: 1120px;
  min-height: 500px;
  margin: auto;

  background: ${(props) => props.theme['gray-600']};

  border-radius: 12px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 48px;
`

export const Container = styled.body`
  min-height: calc(100vh);
  width: 100%;
  background-color: ${(props) => props.theme.principal};
  color: ${(props) => props.theme['gray-100']};
  padding-top: 4rem;
`
export const ContainerForm = styled.form`
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
  display: flex;
  flex-direction: row;
  gap: 1rem;
`
export const Link = styled.a`
  font: 400 1rem Roboto, sans-serif;
  text-decoration: none;
  color: ${(props) => props.theme['green-300']};
  display: flex;
  align-items: center;
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
export const LinkAdmin = styled.a`
  font: 400 1rem Roboto, sans-serif;
  text-decoration: none;
  color: ${(props) => props.theme['green-300']};
  display: flex;
  align-items: center;
  border: 0;
  background: transparent;
  color: ${(props) => props.theme['green-300']};
  font-weight: bold;
  border-radius: 6px;
  &:hover {
    border-color: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  }
`
