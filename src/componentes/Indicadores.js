import { NavLink } from "react-router-dom";
import '../estilos/Main.css'
import Menu from '../img/menu.png'
import axios from "axios";

function App() {

    const post_indicadores = (t) => {
        if (t == "CPC") {
            var postData = {
                fecha: document.getElementById('semana1').value,
                razon: document.getElementById('razon1').value,
                cantidad: document.getElementById('cantidad1').value,
                tipo: t
            }
        }
        if (t == "CPP") {
            var postData = {
                fecha: document.getElementById('semana2').value,
                razon: document.getElementById('razon2').value,
                cantidad: document.getElementById('cantidad2').value,
                tipo: t
            }
        }
        if (t == "BNC") {
            var postData = {
                fecha: document.getElementById('semana3').value,
                razon: document.getElementById('razon3').value,
                cantidad: document.getElementById('cantidad3').value,
                tipo: t
            }
        }

        axios
            .post("http://localhost:8000/cashflow/indicadores/lista", postData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                },
            })
            .then((response) => {
                window.location.reload();
            })
            .catch((error) => {
                console.log("Error")
            })
    }

    const mostrar_nav = () => {
        document.getElementById('navMain').style.display = "block"
        document.getElementById('background').style.display = "block"
    }
    const ocultar_nav = () => {
        document.getElementById('navMain').style.display = "none"
        document.getElementById('background').style.display = "none"
    }


    return (
        <body>
            <div id="background" onClick={ocultar_nav}></div>
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
                <span className="navText"><NavLink className="linkNav" to="/reportes">Reportes</NavLink></span>
                <button className="buttonMain" onClick={ocultar_nav} id="buttonNav">Salir</button>
            </div>

            <h2 id="titleBig">Indicadores Financieros</h2>
            <div className="container2">
                <div className="forms-card2" id="cobrar">
                    <h1 className="title2">Cuentas por cobrar</h1>
                    <div className="input">
                        <input type="text" className="input-fieldMain" id="semana1" required />
                        <label className="input-label">Fecha</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-fieldMain" id="razon1" required />
                        <label className="input-label">Razón Social</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-fieldMain" id="cantidad1" required />
                        <label className="input-label">$ Cantidad</label>
                    </div>
                    <div className="action">
                        <button className="action-button" onClick={() => post_indicadores("CPC")}>Guardar</button>
                    </div>
                </div>

                <div className="forms-card2" id="pagar">
                    <h1 className="title2">Cuentas por pagar</h1>
                    <div className="input">
                        <input type="text" className="input-fieldMain" id="semana2" required />
                        <label className="input-label">Fecha</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-fieldMain" id="razon2" required />
                        <label className="input-label">Razón Social</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-fieldMain" id="cantidad2" required />
                        <label className="input-label">$ Cantidad</label>
                    </div>
                    <div className="action">
                        <button className="action-button" onClick={() => post_indicadores("CPP")}>Guardar</button>
                    </div>
                </div>

                <div className="forms-card2" id="bancos">
                    <h1 className="title2">Bancos</h1>
                    <div className="input">
                        <input type="text" className="input-fieldMain" id="semana3" required />
                        <label className="input-label">Fecha</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-fieldMain" id="razon3" required />
                        <label className="input-label">Razón Social</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-fieldMain" id="cantidad3" required />
                        <label className="input-label">$ Cantidad</label>
                    </div>
                    <div className="action">
                        <button className="action-button" onClick={() => post_indicadores("BNC")}>Guardar</button>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default App;