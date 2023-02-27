import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { Scroll, ChartLineUp } from 'phosphor-react'

export function MenuAdmin() {
  return (
    <HeaderContainer>
      <span>
        <img src={logo} alt="10" height="70" width="70" />
      </span>
      <nav>
        <NavLink to="/Admin/List" title="Listar">
          Listar Clientes
          <Scroll size={24} />
        </NavLink>
        <NavLink to="/Admin/Dashboard" title="Histórico">
          Dashbord
          <ChartLineUp size={24} />
        </NavLink>
        <NavLink to="/" title="Sair">
          Sair
          <ChartLineUp size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
