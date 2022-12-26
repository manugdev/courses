import swal from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function Buscador() {
let token = sessionStorage.getItem("token");
const navigate = useNavigate();

const submitHandler = (e) => {
  e.preventDefault();
  const keyboard = e.currentTarget.keyboard.value.trim();
  if(keyboard.length === 0){
    swal({
      title: "Tienes que escribir una palabra clave.",
      icon: "warning",
    });
  } else if(keyboard.length < 4){
    swal({
      title: "Tienes que escribir una palabra clave de mas de cuatro caracteres.",
      icon: "warning",
    });
  } else {
    e.currentTarget.keyboard.value = "";
    navigate(`/Result?keyboard=${keyboard}`);
  }
}

  return(
    <>
    {!token && <Navigate replace to="/"/>}
    <form onSubmit={submitHandler} className="d-flex align-items-center">
      <label className="form-label mb-0 mx-2">
        <input className="form-control" placeholder="Escribe una palabra clave..." type="text" name="keyboard" id="floatingPassword" />
      </label>
      <button className="btn btn-primary" type="submit">Buscar</button>
    </form>
  </>
  );
}