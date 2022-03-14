import { NavLink } from "react-router-dom";
import '../estilos/FormsUser.css'

function App () {
    return (
        <body>
            <div className="form-boxUser">
                <h1 id="title-user">Cashflow</h1>
                <div className="form-user">
                    <label className="labelUser">Usuario:</label> 
                    <input className="inputUser" id="user" type="text" name= "usuario" placeholder="Usuario"/> 
                    <label className="labelUser">Contraseña:</label> 
                    <input className="inputUser" id="passw" type="password" name= "password" placeholder="Contraseña"/>
                    <br/><button className="buttonUser">Ingresar</button>

                    <br/><NavLink className="linkUS" to="/registro">¿No tienes una cuenta?</NavLink>  
                </div>
            </div>
        </body>
    );
}

export default App;