import { router } from "./routes.js";
import { iniciarSesion } from "./login.js";

function navegar() {

    router();

    const loginForm =
        document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            (e) => {

                e.preventDefault();

                iniciarSesion();
            }
        );
    }

    const logout =
        document.getElementById("logout");

    if (logout) {

        logout.addEventListener("click", () => {

            localStorage.removeItem("usuario");

            history.pushState(null, null, "/");

            navegar();
        });
    }
}

document.addEventListener("click", (e) => {

    if (e.target.matches("[data-link]")) {

        e.preventDefault();

        const href =
            e.target.getAttribute("href");

        history.pushState(null, null, href);

        navegar();
    }
});

window.addEventListener("popstate", navegar);

navegar();