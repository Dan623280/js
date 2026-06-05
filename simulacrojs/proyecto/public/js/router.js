import Home from "./views/Home.js";
import Productos from "./views/Productos.js";
import Login from "./views/Login.js";
import Dashboard from "./views/Dashboard.js";

import { haySesion } from "./auth.js";

export async function router() {

    const app =
        document.getElementById("app");

    const ruta =
        window.location.pathname;

    console.log("Ruta actual:", ruta);

    switch (ruta) {

        case "/":
            app.innerHTML = Home();
            break;

        case "/productos":
            app.innerHTML = await Productos();
            break;

        case "/login":
            app.innerHTML = Login();
            break;

        case "/dashboard":

            if (!haySesion()) {

                history.pushState(
                    null,
                    "",
                    "/login"
                );

                return router();
            }

            app.innerHTML = Dashboard();

            break;

        default:

            app.innerHTML = `
                <h1>404</h1>
                <p>Ruta no encontrada</p>
            `;
    }
}