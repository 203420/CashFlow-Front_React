import { useNavigate, NavLink } from "react-router-dom";
import '../estilos/FormsUser.css'
import axios from "axios";

function App() {
    let navigate = useNavigate();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const consumir_register = () => {
        var postData = {
            first_name: document.getElementById('nombre').value,
            last_name: document.getElementById('apellido').value,
            username: document.getElementById('user').value,
            email: document.getElementById('email').value,
            password: document.getElementById('passw1').value,
            password2: document.getElementById('passw2').value
        }

        axios
            .post("http://localhost:8000/cashflow/register", postData, requestOptions)
            .then(response => {
                alert("Registro exitoso")
                navigate('/',{replace:true});
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    };

    return (
        <body>
            <div className="form-boxUser">
                <h1 id="title-user">Cashflow</h1>
                <div className="form-user">
                    <label className="labelUser">Usuario:</label>
                    <input className="inputUser" id="user" type="text" name="usuario" placeholder="Usuario" />
                    <label className="labelUser">Nombre:</label>
                    <input className="inputUser" id="nombre" type="text" name="nombre" placeholder="Nombre" />
                    <label className="labelUser">Apellido:</label>
                    <input className="inputUser" id="apellido" type="text" name="apellido" placeholder="Apellido" />
                    <label className="labelUser">Correo electronico:</label>
                    <input className="inputUser" id="email" type="email" name="email" placeholder="Correo" />
                    <label className="labelUser">Contraseña:</label>
                    <input className="inputUser" type="password" name="password" placeholder="Contraseña" id="passw1" />
                    <label className="labelUser">Confirmar contraseña:</label>
                    <input className="inputUser" type="password" name="password2" placeholder="Contraseña" id="passw2" />
                    <br /><button className="buttonUser" onClick={consumir_register}>Ingresar</button>

                    <br /><NavLink className="linkUS" to="/">¿Tienes una cuenta?</NavLink>
                </div>
            </div>
        </body>
    );
}

export default App;