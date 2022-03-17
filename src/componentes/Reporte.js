import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import '../estilos/Main.css';
import { Component } from 'react';
import Menu from '../img/menu.png';
import ImgReporte from '../img/reporteImg.png'


class App extends Component {
    

    // logout () {
    //     localStorage.clear();
    //     navigate('/',{replace:true});
    // }

    mostrar_nav() {
        document.getElementById('navMain').style.display = "block"
        document.getElementById('background').style.display = "block"
    }
    ocultar_nav() {
        document.getElementById('navMain').style.display = "none"
        document.getElementById('background').style.display = "none"
    }


    render() {
        return (
            <body>
                <div id="background" onClick={this.ocultar_nav}></div>
                <header id="headerMain">
                    <div>
                        <NavLink className="linkNav" to="/menu">
                            <h3 id="titleMain">Cashflow</h3>
                        </NavLink>
                    </div>
                    <img onClick={this.mostrar_nav} src={Menu} id="menuImg" alt="error" />
                </header>
    
                <div id="navMain">
                    <span className="navText"><NavLink className="linkNav" to="/categorias">Categorias</NavLink></span>
                    <span className="navText"><NavLink className="linkNav" to="/flujo">Flujo</NavLink></span>
                    <span className="navText"><NavLink className="linkNav" to="/indicadores">Indicadores</NavLink></span>
                    <span className="navText"><NavLink className="linkNav" to="/reportes">Reportes</NavLink></span>
                    <button className="buttonMain" onClick={this.ocultar_nav} id="buttonNav">Salir</button>
                </div>
    
                <h2 id="titleBig">Generar Reportes</h2>
                <div class="container2">
                    <div class="forms-card3">
                        <h1 class="title2">Elegir opción</h1>
                        <label class="labelReport">Reporte de indicadores financieros:</label>
                        <button class="buttonReport">Generar PDF</button>
                        <label class="labelReport">Reporte de flujo:</label>
                        <button class="buttonReport">Generar PDF</button>
                    </div>
                </div>
                <img src={ImgReporte} alt="error" id="imgReport"/>
                <div id="textReport">Estos documentos contienen información referente a los ingresos y gastos, asi como ciertos indicadores financieros obtenidos con los datos registrados en el último mes.</div>
    
            </body>
        );
    }
   
}

export default App;