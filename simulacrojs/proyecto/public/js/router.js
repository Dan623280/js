import Home from "./views/home.js";
import Productos from "./views/Productos.js";

export async function router() {

    const app =
        document.getElementById("app");

    const ruta =
        window.location.pathname;

    switch (ruta) {

        case "/":

            app.innerHTML =
                Home();

            break;

        case "/productos":

            app.innerHTML =
                await Productos();

            break;

        default:

            app.innerHTML = `
                <h1>404</h1>
                <p>Página no encontrada</p>
            `;
    }
}