import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import '../estilos/Main.css';
import { Component } from 'react';
import React from "react";
import Menu from '../img/menu.png';
import ImgReporte from '../img/reporteImg.png'
import jsPDF from "jspdf";
import "jspdf-autotable";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            people: [
                { name: "Keanu Reeves", profession: "Actor", edad: 15 },
                { name: "Lionel Messi", profession: "Football Player", edad: 15 },
                { name: "Cristiano Ronaldo", profession: "Football Player", edad: 15 },
                { name: "Jack Nicklaus", profession: "Golf Player", edad: 15 },
            ],
            flujoSalida: []
        }
        this.flujoSalida = this.flujoSalida.bind(this)
        this.exportPDF = this.exportPDF.bind(this)
    }

    exportPDF = () => {
        console.log(this.state.flujoSalida)
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = "Reporte de Flujos Financieros";
        const headers = [["SubCategoria", "Semana 1", "Semana 2", "Semana 3", "Semana 4", "Total"]];

        const data = this.state.flujoSalida.map(flujoSalida => [flujoSalida.Salida, flujoSalida.Semana1, flujoSalida.Semana2, flujoSalida.Semana3, flujoSalida.Semana4, flujoSalida.Total]);

        let content = {
            startY: 50,
            head: headers,
            body: data
        };

        const headers2 = [["SubCategoria", "Semana 1", "Semana 2", "Semana 3", "Semana 4", "Total"]];

        const data2 = this.state.flujoSalida.map(flujoSalida => [flujoSalida.Salida, flujoSalida.Semana1, flujoSalida.Semana2, flujoSalida.Semana3, flujoSalida.Semana4, flujoSalida.Total]);

        let content2 = {
            startY: 1000,
            head: headers2,
            body: data2
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.autoTable(content2);
        doc.save("Reporte-Flujos-Financieros.pdf")
    }

    flujoSalida() {
        axios
            .get("http://localhost:8000/cashflow/reporte/flujo/salida", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                },
            })
            .then(res => {
                this.setState({ flujoSalida : res.data })
                console.log(this.state.flujoSalida)
                this.exportPDF()
            })
            .catch(error => {
                console.log("Error");
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

                <h2 id="titleBig">Generar Reportes</h2>
                <div class="container2">
                    <div class="forms-card3">
                        <h1 class="title2">Elegir opción</h1>
                        <label class="labelReport">Reporte de indicadores financieros:</label>
                        <button class="buttonReport">Generar PDF</button>
                        <label class="labelReport">Reporte de flujo:</label>
                        <button class="buttonReport" onClick={this.flujoSalida}>Generar PDF</button>
                    </div>
                </div>
                <img src={ImgReporte} alt="error" id="imgReport" />
                <div id="textReport">Estos documentos contienen información referente a los ingresos y gastos, asi como ciertos indicadores financieros obtenidos con los datos registrados en el último mes.</div>

            </body>
        );
    }

}

export default App;