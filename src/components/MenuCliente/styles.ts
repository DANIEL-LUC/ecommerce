import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 15rem;
  min-height: calc(100vh);
  padding: 2.5rem;
  background: ${(props) => props.theme.principal};
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;

  nav {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    a {
      font: 400 1.1rem Roboto, sans-serif;
      text-decoration: none;
      width: 120%;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme['gray-900']};
      border-bottom: 3px solid transparent;
      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['gray-700']};
      }
      &.active {
        border-bottom: 3px solid ${(props) => props.theme['gray-700']};
      }
    }
  }
`
