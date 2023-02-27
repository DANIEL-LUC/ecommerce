import { Routes, Route } from 'react-router-dom'
import { MenuAdmin } from './components/MenuAdmin/MenuAdmin'
import { Admin } from './pages/Admin/Admin'
import { Dashboard } from './pages/Admin/Dashbord/Dashbord'
import { ListarClientes } from './pages/Admin/ListarClientes/ListarClientes'
import { CadastrarCliente } from './pages/Cadastrar/CadastrarCliente'
import { AlterarSenha } from './pages/Home/AlterarSenha/AlterarSenha'
import { EditarCliente } from './pages/Home/EditarPerfil/EditarPerfil'
import { HistoricoCompras } from './pages/Home/HistoricoCompras/HistoricoCompras'
import { Perfil } from './pages/Home/Perfil/Perfil'
import { Login } from './pages/Login/Login'
import { AdminLayout } from './styles/AdminLayout/AdminLayout'
import { GlobalStyle } from './styles/global'
import { PerfilLayout } from './styles/PerfilLayout/PerfilLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/CadastrarCliente" element={<CadastrarCliente />} />

      <Route path="/Admin" element={<AdminLayout />}>
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Admin/List" element={<ListarClientes />} />
        <Route path="/Admin/Dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/Perfil" element={<PerfilLayout />}>
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Perfil/Editar" element={<EditarCliente />} />
        <Route path="/Perfil/Historico" element={<HistoricoCompras />} />
        <Route path="/Perfil/AlterarSenha" element={<AlterarSenha />} />
      </Route>
    </Routes>
  )
}
