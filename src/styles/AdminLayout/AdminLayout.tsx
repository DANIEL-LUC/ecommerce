import { Outlet } from 'react-router-dom'
import { MenuAdmin } from '../../components/MenuAdmin/MenuAdmin'

import { LayoutContainer } from './styles'

export function AdminLayout() {
  return (
    <LayoutContainer>
      <MenuAdmin />
      <Outlet />
    </LayoutContainer>
  )
}
