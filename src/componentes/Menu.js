import { NavLink, useNavigate } from "react-router-dom";
import '../estilos/Menu.css'
import img1 from '../img/list.png'
import img2 from '../img/money.png'
import img3 from '../img/finance.png'
import img4 from '../img/document.png'

function App() {
    let navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/', { replace: true });
    }

    return (
        <body>
            <header>
                <div id="navMenu">
                    <div><NavLink className="linkMenu" to="/menu"><h3 id="title-Menu">Cashflow</h3></NavLink></div>
                    <button id="buttonMenu" onClick={logout}>Salir</button>
                </div>
            </header>
            <div id="containerMenu">
                <div className="optionMenu">
                    <NavLink className="linkMenu" to="/categorias">
                        <img src={img1} className="imgMenu" id="ctg" alt="error" />
                        <span className="spanMenu">Agregar categorias</span>
                        <br /><p>Permite registrar una categoria nueva y clasificarla</p>
                    </NavLink>
                </div>
                <div className="optionMenu">
                    <NavLink className="linkMenu" to="/flujo">
                        <img src={img2} className="imgMenu" id="money" alt="error" />
                        <span className="spanMenu">Registrar flujo</span>
                        <br /><p>Permite agregar un ingreso o gasto con su respectiva categoria</p>
                    </NavLink>
                </div>
                <div className="optionMenu">
                    <NavLink className="linkMenu" to="/indicadores">
                        <img src={img3} className="imgMenu" id="ind" alt="error" />
                        <span className="spanMenu">Registrar indicadores</span>
                        <br /><p>Permite registrar datos como cuentas por pagar, cobrar y bancos</p>
                    </NavLink>
                </div>
                <div className="optionMenu">
                    <NavLink className="linkMenu" to="/reportes">
                        <img src={img4} className="imgMenu" id="ind" alt="error" />
                        <span className="spanMenu">Generar reportes</span>
                        <br /><p>Permite generar reportes financieros con los datos del último mes</p>
                    </NavLink>
                </div>
            </div>
        </body>
    );
}
export default App;