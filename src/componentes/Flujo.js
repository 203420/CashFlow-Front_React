import { NavLink } from "react-router-dom";
import '../estilos/Main.css'
import Menu from '../img/menu.png'
import { Component } from 'react';
import axios from "axios";

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            flujos: [],
            categorias: []
        }
    }

    componentDidMount() {
        axios
            .get("http://localhost:8000/cashflow/flujos/lista", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                },
            })
            .then(res => {
                this.setState({ flujos: res.data })
            })
            .catch(error => {
                console.log(error.response);
            })

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

    registrar_flujo() {
        var postData = {
            tipo: document.getElementById("selectFlujo").value,
            categoria: document.getElementById("selectCat").value,
            descripcion: document.getElementById("inputDesc").value,
            cantidad: document.getElementById("inputCant").value
        }

        // console.log(document.getElementById("selectFlujo").value)
        // console.log(document.getElementById("selectCat").value)
        // console.log(document.getElementById("inputDesc").value)
        // console.log(document.getElementById("inputCant").value)

        axios.post("http://localhost:8000/cashflow/flujos/lista", postData, {
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

                <h2 id="titleBig">Registrar flujo de efectivo</h2>
                <div className="container">
                    <div className="forms-card" id="form-category">
                        <h1 className="title" id="title-form">Agregar Flujo</h1>

                        <label className="formLabel">Tipo de flujo:</label>
                        <select name="selection" id="selectFlujo" placeholder="Opcion:">
                            <option value="0" selected disabled>Selecciona una opción</option>
                            <option value="Entrada">Entrada</option>
                            <option value="Salida">Salida</option>
                        </select>

                        <label className="formLabel">Categoria:</label>
                        <select name="selection" id="selectCat" placeholder="Opcion:">
                            <option value="0" selected disabled>Selecciona una opción</option>
                            {
                                this.state.categorias.map(categorias =>
                                    <option value={categorias.id} key={categorias.id}>{categorias.categoria} - {categorias.subcategoria}</option>
                                )
                            }
                        </select>

                        <div className="input">
                            <input type="text" className="input-fieldMain" id="inputDesc" required />
                            <label className="input-label">Descripción</label>
                        </div>
                        <div className="input">
                            <input type="text" className="input-fieldMain" id="inputCant" required />
                            <label className="input-label">Cantidad</label>
                        </div>
                        <div className="action">
                            <button className="action-button" onClick={this.registrar_flujo}>Guardar</button>
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
                                {
                                    this.state.flujos.map(flujos => <tr className="info-table" key={flujos.id}>
                                        <td>{flujos.fecha}</td>
                                        <td>{flujos.descripcion}</td>
                                        <td>{flujos.categoriaCat}</td>
                                        <td>{flujos.subcategoriaCat}</td>
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