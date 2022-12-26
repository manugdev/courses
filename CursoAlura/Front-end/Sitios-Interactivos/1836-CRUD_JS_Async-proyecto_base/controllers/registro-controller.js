import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;

    clientServices.crearCliente(nombre, email).then(() => {
        window.location.href = "http://127.0.0.1:5500/CursoAlura/Front-end/Sitios-Interactivos/1836-CRUD_JS_Async-proyecto_base/screens/registro_completado.html";
    }).catch(err => console.log(err))
});