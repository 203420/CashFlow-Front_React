import axios from "axios";
import { NavLink } from "react-router-dom";
import '../estilos/Main.css';
import { Component } from 'react';
import Menu from '../img/menu.png';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categorias: [],
        }
    }

    componentDidMount() {
        axios
            .get("http://localhost:8000/cashflow/categorias/lista", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                },
            })
            .then(res => {
                this.setState({ categorias: res.data.pay_load })
            })
            .catch(error => {
                console.log(error.response);
            })
    }

    registrar_categoria() {
        var postData = {
            clasificacion: document.getElementById("select").value,
            categoria: document.getElementById("inputCategoria").value,
            subcategoria: document.getElementById("inputSubcategoria").value,
        }

        axios.post("http://localhost:8000/cashflow/categorias/lista", postData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem('token'),
            },
        })
            .then((response) => {
                window.location.reload();
            })
            .catch((error) => {
                console.log(error.response.data)
            })
    }

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
                            <input type="text" className="input-fieldMain" id="inputCategoria" required />
                            <label className="input-label" >Categoria</label>
                        </div>
                        <div className="input">
                            <input type="text" className="input-fieldMain" id="inputSubcategoria" required />
                            <label className="input-label" >Subcategoria</label>
                        </div>
                        <div className="action">
                            <button className="action-button" onClick={this.registrar_categoria}>Guardar</button>
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
                                {
                                    // this.state.categorias.map(categorias => <tr className="info-table" key={categorias.id} onDoubleClick={this.evento.bind(this, categorias)}>
                                    this.state.categorias.map(categorias => <tr className="info-table" key={categorias.id}>
                                        <td>{categorias.clasificacion}</td>
                                        <td>{categorias.categoria}</td>
                                        <td>{categorias.subcategoria}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </body>

        );
    }

}

export default App;