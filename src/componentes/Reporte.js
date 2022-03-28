import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
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
            flujoSalida: [],
            flujoEntrada: [],
            CPP: [],
            CPC: [],
            BNC: [],
        }
        this.get_flujo_entrada = this.get_flujo_entrada.bind(this)
        this.get_flujo_salida = this.get_flujo_salida.bind(this)
        this.get_CPC = this.get_CPC.bind(this)
        this.get_CPP = this.get_CPP.bind(this)
        this.get_BNC = this.get_BNC.bind(this)
        this.exportPDF = this.exportPDF.bind(this)
        this.exportIndicador = this.exportIndicador.bind(this)
    }

    validar1 = () =>{
        if (localStorage.getItem('superUser') === "true"){
            this.get_CPC()
        }else{
            this.notify()
        }
    }
    validar2 = () =>{
        if (localStorage.getItem('superUser') === "true"){
            this.get_flujo_salida()
        }else{
            this.notify()
        }
    }


    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = "Reporte de Flujos Financieros";
        const headers = [["Flujo Salida", "Semana 1", "Semana 2", "Semana 3", "Semana 4", "Total"]];

        const data = this.state.flujoSalida.map(flujoSalida => [flujoSalida.Salida, flujoSalida.Semana1, flujoSalida.Semana2, flujoSalida.Semana3, flujoSalida.Semana4, flujoSalida.Total]);

        let content = {
            startY: 50,
            head: headers,
            body: data
        };

        const headers2 = [["Flujo Entrada", "Semana 1", "Semana 2", "Semana 3", "Semana 4", "Total"]];

        const data2 = this.state.flujoEntrada.map(flujoSalida => [flujoSalida.Salida, flujoSalida.Semana1, flujoSalida.Semana2, flujoSalida.Semana3, flujoSalida.Semana4, flujoSalida.Total]);

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

    get_flujo_salida() {
        let mes = document.getElementById("selectFlujo").value

        axios
            .get("http://localhost:8000/cashflow/reporte/flujo/salida/"+mes, {
                headers: {
                    // 'Content-Type': 'application/json',
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                },
            })
            .then(res => {
                this.setState({ flujoSalida: res.data })
                this.get_flujo_entrada()
            })
            .catch(error => {
                console.log("Error1");
            })

    }

    get_flujo_entrada() {
        let mes = document.getElementById("selectFlujo").value
        axios
            .get("http://localhost:8000/cashflow/reporte/flujo/entrada2/"+mes, {
                headers: {
                    // 'Content-Type': 'application/json',
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                },
            })
            .then(res => {
                this.setState({ flujoEntrada: res.data })
                this.exportPDF()
            })
            .catch(error => {
                console.log("Error2");
            })

    }

    get_CPC() {
        let mes = document.getElementById("selectIndi").value
        axios
            .get("http://localhost:8000/cashflow/reporte/indicador/cpc/"+mes, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                },
            })
            .then(res => {
                this.setState({ CPC: res.data })
                console.log("1")
                this.get_CPP()
            })
            .catch(error => {
                console.log(error.response.data);
            })

    }

    get_CPP() {
        let mes = document.getElementById("selectIndi").value
        axios
            .get("http://localhost:8000/cashflow/reporte/indicador/cpp/"+mes, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                },
            })
            .then(res => {
                this.setState({ CPP: res.data })
                console.log("2")
                this.get_BNC()
            })
            .catch(error => {
                console.log("Error 2");
            })

    }

    get_BNC() {
        let mes = document.getElementById("selectIndi").value
        axios
            .get("http://localhost:8000/cashflow/reporte/indicador/bnc/"+mes, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                },
            })
            .then(res => {
                this.setState({ BNC: res.data })
                console.log("3")
                this.exportIndicador()
            })
            .catch(error => {
                console.log("Error 3");
            })

    }

    exportIndicador = () => {
        console.log(this.state.CPC)
        console.log(this.state.CPP)
        console.log(this.state.BNC)
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = "Reporte de Indicadores Financieros";
        const headers = [["Cuentas por Cobrar", "Semana 1", "Semana 2", "Semana 3", "Semana 4", "Total"]];

        const data = this.state.CPC.map(flujoSalida => [flujoSalida.Salida, flujoSalida.Semana1, flujoSalida.Semana2, flujoSalida.Semana3, flujoSalida.Semana4, flujoSalida.Total]);

        let content = {
            startY: 50,
            head: headers,
            body: data
        };

        const headers2 = [["Cuentas por Pagar", "Semana 1", "Semana 2", "Semana 3", "Semana 4", "Total"]];

        const data2 = this.state.CPP.map(flujoSalida => [flujoSalida.Salida, flujoSalida.Semana1, flujoSalida.Semana2, flujoSalida.Semana3, flujoSalida.Semana4, flujoSalida.Total]);

        let content2 = {
            startY: 1000,
            head: headers2,
            body: data2
        };

        const headers3 = [["Bancos", "Semana 1", "Semana 2", "Semana 3", "Semana 4", "Total"]];

        const data3 = this.state.BNC.map(flujoSalida => [flujoSalida.Salida, flujoSalida.Semana1, flujoSalida.Semana2, flujoSalida.Semana3, flujoSalida.Semana4, flujoSalida.Total]);

        let content3 = {
            startY: 2000,
            head: headers3,
            body: data3
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.autoTable(content2);
        doc.autoTable(content3);
        doc.save("Reporte-Indicadores.pdf")
    }

    mostrar_nav() {
        document.getElementById('navMain').style.display = "block"
        document.getElementById('background').style.display = "block"
    }
    ocultar_nav() {
        document.getElementById('navMain').style.display = "none"
        document.getElementById('background').style.display = "none"
    }

    notify () {toast.error('No tienes los permisos para esto');}

    render() {
        return (
            <body>
                <div><Toaster 
                position="bottom-left"
                reverseOrder={false}/>
                </div>
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
                        <select name="selection" id="selectIndi" placeholder="Opcion:">
                            <option value="0" selected disabled>Mes</option>
                            <option value="01">Enero</option>
                            <option value="02">Febrero</option>
                            <option value="03">Marzo</option>
                            <option value="04">Abril</option>
                            <option value="05">Mayo</option>
                            <option value="06">Junio</option>
                            <option value="07">Julio</option>
                            <option value="08">Agosto</option>
                            <option value="09">Septiembre</option>
                            <option value="10">Octubre</option>
                            <option value="11">Noviembre</option>
                            <option value="12">Diciembre</option>
                        </select>
                        <button class="buttonReport" id="1" onClick={() => this.validar1()}>Generar PDF</button>
                        <label class="labelReport">Reporte de flujo:</label>
                        <select name="selection" id="selectFlujo" placeholder="Opcion:">
                            <option value="0" selected disabled>Mes</option>
                            <option value="01">Enero</option>
                            <option value="02">Febrero</option>
                            <option value="03">Marzo</option>
                            <option value="04">Abril</option>
                            <option value="05">Mayo</option>
                            <option value="06">Junio</option>
                            <option value="07">Julio</option>
                            <option value="08">Agosto</option>
                            <option value="09">Septiembre</option>
                            <option value="10">Octubre</option>
                            <option value="11">Noviembre</option>
                            <option value="12">Diciembre</option>
                        </select>
                        <button class="buttonReport" id="2" onClick={() => this.validar1()}>Generar PDF</button>
                    </div>
                </div>
                <img src={ImgReporte} alt="error" id="imgReport" />
                <div id="textReport">Estos documentos contienen información referente a los ingresos y gastos, asi como ciertos indicadores financieros obtenidos con los datos registrados en el último mes.</div>

            </body>
        );
    }

}

export default App;