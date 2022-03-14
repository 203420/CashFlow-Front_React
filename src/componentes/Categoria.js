import axios from "axios";
import { NavLink } from "react-router-dom";
import '../estilos/Main.css'
import Menu from '../img/menu.png'

function App() {

    const registrar_categoria = () =>{
        var postData = {
            clasificacion: document.getElementById("select").value,
            categoria: document.getElementById("inputCategoria").value,
            subcategoria: document.getElementById("inputSubcategoria").value,   
        }

        axios.post("http://localhost:8000/cashflow/categorias/list",postData,{
            Headers: { "Content-Type": "application/json", 'Token ': localStorage.getItem('token'),
        },  
        })
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }

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



            <h2 id="titleBig">Registrar Categorias</h2>
            <div className="container">
                <div className="forms-card" id="form-category">
                    <h1 className="title" id="title-form">Agregar Categorias</h1>
                    <label className="formLabel">Clasificación:</label>
                    <select name="selection" id="select" placeholder="Opcion:">
                        <option value="0" selected disabled>Selecciona una opción</option>
                        <option value="GAO">GAO</option>
                        <option value="Ingreso">Ingreso</option>
                        <option value="Costo-Venta">Costo-Venta</option>
                    </select>

                    <div className="input">
                        <input type="text" className="input-fieldMain" required />
                        <label className="input-label" id="inputCategoria">Categoria</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-fieldMain" required />
                        <label className="input-label" id="inputSubcategoria">Subcategoria</label>
                    </div>
                    <div className="action">
                        <button className="action-button">Guardar</button>
                    </div>
                </div>


                <div id="data-categories">
                    <h1 className="title" id="title-table">Lista de categorias</h1>
                    <table id="table">
                        <thead>
                            <tr>
                                <th>Clasificación</th>
                                <th>Categoria</th>
                                <th>Subcategoria</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="info-table">
                                <td>GAO</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                            </tr>
                            <tr className="info-table">
                                <td>Ingreso</td>
                                <td>Christina Berglund</td>
                                <td>Sweden</td>
                            </tr>
                            <tr className="info-table">
                                <td>Costo-Venta</td>
                                <td>Francisco Chang</td>
                                <td>Mexico</td>
                            </tr>
                            <tr className="info-table">
                                <td>Ingreso</td>
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