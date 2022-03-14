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

            <h2 id="titleBig">Registrar flujo de efectivo</h2>
            <div className="container">
                <div className="forms-card" id="form-category">
                    <h1 className="title" id="title-form">Agregar Flujo</h1>

                    <label className="formLabel">Tipo de flujo:</label>
                    <div className="type">
                        <input type="radio" name="options" id="entrada" className="radioInput"/>
                        <label for="entrada">Entrada</label>
                    </div>
                    <div className="type">
                        <input type="radio" name="options" id="salida" className="radioInput"/>
                        <label for="salida">Salida</label>
                    </div>


                    <label className="formLabel">Categoria:</label>
                    <select name="selection" id="select" placeholder="Opcion:">
                        <option value="0" selected disabled>Selecciona una opción</option>
                        <option value="1">Nomina</option>
                        <option value="2">Venta</option>
                        <option value="3">Pago</option>
                    </select>

                    <div className="input">
                        <input type="text" className="input-fieldMain" required/>
                        <label className="input-label">Descripción</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-fieldMain" required/>
                        <label className="input-label">Cantidad</label>
                    </div>
                    <div className="action">
                        <button className="action-button">Guardar</button>
                    </div>
                </div>
                

                <div id="data-categories">
                    <h1 className="title" id="title-table">Ultimos registros</h1>
                    <table id="table">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Descripción</th>
                                <th>Categoria</th>
                                <th>Subcategoria</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="info-table">
                                <td>04/01/2021</td>
                                <td>Pago Cliente 345</td>
                                <td>Nómina</td>
                                <td>Germany</td>
                            </tr>
                            <tr className="info-table">
                                <td>05/01/2021</td>
                                <td>Envio pedido 120</td>
                                <td>Christina Berglund</td>
                                <td>Sweden</td>
                            </tr>
                            <tr className="info-table">
                                <td>06/01/2021</td>
                                <td> Anticipo pedido 104</td>
                                <td>Francisco Chang</td>
                                <td>Mexico</td>
                            </tr>
                            <tr className="info-table">
                                <td>07/01/2021</td>
                                <td>Pago Sra. María Sol</td>
                                <td>Chang Frn</td>
                                <td>Mexico</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
       </body>
       
    );
}

export default App;