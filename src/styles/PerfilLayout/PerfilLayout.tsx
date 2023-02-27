import { Outlet } from 'react-router-dom'

import { MenuCliente } from '../../components/MenuCliente/MenuCliente'

import { LayoutContainer } from './styles'

export function PerfilLayout() {
  return (
    <LayoutContainer>
      <MenuCliente />
      <Outlet />
    </LayoutContainer>
  )
}
