import axios from "axios"
import swal from "@sweetalert/with-react";
import { useNavigate, Navigate } from "react-router-dom";

import "../css/bootstrap.min.css";

function Login(){
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
    if (email === "" || password === ""){
      swal({
        title: "Los campos no pueden estar vacios.",
        text: "Debes rellenar el formulario.",
        icon: "error",
        button: "Volver",
      });
      return;
    } 
    if(email !== "" && !regexEmail.test(email)){
      swal({
        title: "Debes escribir una direccion de correo valida.",
        text: "Debes ingresar un email valido.",
        icon: "warning",
        button: "Volver",
      });
      return;
    }
    if(email !== "challenge@alkemy.org" || password !== "react"){
      swal({
        title: "Credenciales invalidas.",
        text: "Debes ingresar la informacion de inicio correcta.",
        icon: "warning",
        button: "Volver",
      });
      return;
    }
    axios.post("http://challenge-react.alkemy.org/", { email, password})
    .then(res => {
      swal({
        title: "Perfecto, ingresaste correctamente!",
        icon: "success",
      });
      const tokenRecibido = res.data.token;
      sessionStorage.setItem("token", tokenRecibido);
      navigate("/List");
    });
  }
  
  let token = sessionStorage.getItem("token");

  return(
    <>
      {token && <Navigate replace to="/List" />}
      <div className="row mt-3">
        <div className="col-6 offset-3">
            <h2 className="h3 mb-3 fw-normal">Formulario de Login</h2>
            <form onSubmit={submitHandler}>
            <label className="form-label d-block mt-2">
              <input className="form-control" placeholder="Correo electrónico" type="email" name="email" id="floatingPassword" />
            </label>
            <label className="form-label d-block mt-2"> 
              <input className="form-control" placeholder="Contraseña" type="password" name="password" id="floatingPassword" />
            </label>
            <button className="btn btn-primary mt-2" type="submit">Ingresar</button>
          </form>
        </div>
      </div>
    </>
    
  )
}

export default Login;