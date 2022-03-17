import { BrowserRouter as Router, Route, NavLink,  Routes, BrowserRouter } from "react-router-dom";
import Login from './componentes/Login'
import Register from './componentes/Register'
import Menu from './componentes/Menu'
import Categoria from './componentes/Categoria'
import Flujo from './componentes/Flujo'
import Indicadores from './componentes/Indicadores'
import Reporte from './componentes/Reporte'

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/registro" element={<Register/>}/>
            <Route exact path="/menu" element={<Menu/>}/>
            <Route exact path="/categorias" element={<Categoria/>}/>
            <Route exact path="/flujo" element={<Flujo/>}/>
            <Route exact path="/indicadores" element={<Indicadores/>}/>
            <Route exact path="/reportes" element={<Reporte/>}/>
        </Routes>
    </BrowserRouter>      
    </>
  );
}

export default App;
