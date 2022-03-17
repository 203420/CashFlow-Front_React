import axios from 'axios';
import { NavLink, useNavigate } from "react-router-dom";
import '../estilos/FormsUser.css'

function App () {
    let navigate = useNavigate();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const consumir_login = () => {
        var postData = {
            username: document.getElementById('user').value,
            password: document.getElementById('passw').value
        }

        axios
            .post("http://localhost:8000/cashflow/login", postData, requestOptions)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user_id', response.data.user_id);
                navigate('/menu',{replace:true});
            })
            .catch((error) => {
                console.log(error.response.data)
                if (error.response.data.username || error.response.data.password) {
                    alert("No puedes dejar campos vacios");
                }
                if (error.response.data.non_field_errors) {
                    alert("No puedes iniciar sesión con las credenciales proporcionadas")
                }
            });
    };

    return (
        <body>
            <div className="form-boxUser">
                <h1 id="title-user">Cashflow</h1>
                <div className="form-user">
                    <label className="labelUser">Usuario:</label> 
                    <input className="inputUser" id="user" type="text" name= "usuario" placeholder="Usuario"/> 
                    <label className="labelUser">Contraseña:</label> 
                    <input className="inputUser" id="passw" type="password" name= "password" placeholder="Contraseña"/>
                    <br/><button className="buttonUser" onClick={consumir_login}>Ingresar</button>

                    <br/><NavLink className="linkUS" to="/registro">¿No tienes una cuenta?</NavLink>  
                </div>
            </div>
        </body>
    );
}

export default App;