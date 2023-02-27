import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { Scroll, ChartLineUp, Timer } from 'phosphor-react'

export function MenuCliente() {
  return (
    <HeaderContainer>
      <span>
        <img src={logo} alt="10" height="70" width="70" />
      </span>
      <nav>
        <NavLink to="/Perfil/Editar" title="Editar">
          Editar dados
          <Scroll size={24} />
        </NavLink>
        <NavLink to="/perfil/Historico" title="Histórico">
          Histórico de compras
          <Timer size={24} />
        </NavLink>
        <NavLink to="/Perfil/Desativar" title="desativar">
          Desativar conta
          <ChartLineUp size={24} />
        </NavLink>
        <NavLink to="/Perfil/AlterarSenha" title="Editar">
          Mudar senha
          <Scroll size={24} />
        </NavLink>
        <NavLink to="http://localhost/Home/?" title="Sair">
          Voltar
          <ChartLineUp size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
