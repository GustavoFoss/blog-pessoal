import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Inicio from './paginas/inicio'
import SobreMim from './paginas/SobreMim'
import Menu from './componentes/Menu'
import Rodape from './componentes/Rodape'
import PaginaPadrao from 'componentes/PaginaPadrao'
import Post from 'paginas/Post'
import ScrollToTop from 'componentes/ScrollToTop'
import PaginaNaoEncontrada from 'paginas/PaginaNaoEncontrada'


function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path='sobre-mim' element={<SobreMim />} />
        </Route>

        <Route path='posts/:id' element={<Post />} />
        <Route path='*' element={<PaginaNaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
