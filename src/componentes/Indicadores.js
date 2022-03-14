import { NavLink } from "react-router-dom";
import '../estilos/Main.css'
import Menu from '../img/menu.png'

function App() {

    const mostrar_nav = () =>{
        document.getElementById('navMain').style.display = "block"
    }

    const ocultar_nav = () =>{
        document.getElementById('navMain').style.display = "none"
    }


    return (
        <body>
            <header id="headerMain">
                <div>
                    <NavLink className="linkNav" to="/menu">
                        <h3 id="titleMain">Cashflow</h3>
                    </NavLink>
                </div>
                <img onClick={mostrar_nav} src={Menu} id="menuImg" alt="error" />
            </header>

            <div id="navMain">
                <span className="navText"><NavLink className="linkNav" to="/categorias">Categorias</NavLink></span>
                <span className="navText"><NavLink className="linkNav" to="/flujo">Flujo</NavLink></span>
                <span className="navText"><NavLink className="linkNav" to="/indicadores">Indicadores</NavLink></span>
                <span className="navText"><NavLink className="linkNav" to="/">Reporte</NavLink></span>
                <button className="buttonMain" onClick={ocultar_nav} id="buttonNav">Salir</button>
            </div>

            <h2 id="titleBig">Indicadores Financieros</h2>
            <div className="container2">
                <div className="forms-card2" id="cobrar">
                    <h1 className="title2">Cuentas por cobrar</h1>
                    <div className="input">
                        <input type="text" className="input-fieldMain" required />
                        <label className="input-label">Número de Semana</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-fieldMain" required />
                        <label className="input-label">Razón Social</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-fieldMain" required />
                        <label className="input-label">$ Cantidad</label>
                    </div>
                    <div className="action">
                        <button className="action-button">Guardar</button>
                    </div>
                </div>

                <div className="forms-card2" id="pagar">
                    <h1 className="title2">Cuentas por pagar</h1>
                    <div className="input">
                        <input type="text" className="input-fieldMain" required />
                        <label className="input-label">Número de Semana</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-fieldMain" required />
                        <label className="input-label">Razón Social</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-fieldMain" required />
                        <label className="input-label">$ Cantidad</label>
                    </div>
                    <div className="action">
                        <button className="action-button">Guardar</button>
                    </div>
                </div>

                <div className="forms-card2" id="bancos">
                    <h1 className="title2">Bancos</h1>
                    <div className="input">
                        <input type="text" className="input-fieldMain" required />
                        <label className="input-label">Número de Semana</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-fieldMain" required />
                        <label className="input-label">Razón Social</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-fieldMain" required />
                        <label className="input-label">$ Cantidad</label>
                    </div>
                    <div className="action">
                        <button className="action-button">Guardar</button>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default App;