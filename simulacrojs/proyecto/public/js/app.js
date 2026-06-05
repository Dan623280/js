import { router } from "./router.js";

import {
    guardarSesion,
    cerrarSesion
}
from "./auth.js";

document.addEventListener(
    "DOMContentLoaded",
    () => {

        router();

        document.body.addEventListener(
            "click",
            async (e) => {

                const enlace =
                    e.target.closest(
                        "[data-link]"
                    );

                if (enlace) {

                    e.preventDefault();

                    history.pushState(
                        null,
                        "",
                        enlace.getAttribute(
                            "href"
                        )
                    );

                    router();
                }

                if (
                    e.target.id ===
                    "logout"
                ) {

                    cerrarSesion();

                    history.pushState(
                        null,
                        "",
                        "/login"
                    );

                    router();
                }
            }
        );

        document.addEventListener(
            "submit",
            async (e) => {

                if (
                    e.target.id !==
                    "loginForm"
                ) return;

                e.preventDefault();

                const correo =
                    document
                    .getElementById(
                        "correo"
                    ).value;

                const password =
                    document
                    .getElementById(
                        "password"
                    ).value;

                const respuesta =
                    await fetch(
                        "/api/login",
                        {
                            method:
                                "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify(
                                    {
                                        correo,
                                        password
                                    }
                                )
                        }
                    );

                const datos =
                    await respuesta.json();

                if (datos.ok) {

                    guardarSesion(
                        datos.usuario
                    );

                    history.pushState(
                        null,
                        "",
                        "/dashboard"
                    );

                    router();

                } else {

                    document
                    .getElementById(
                        "mensaje"
                    ).textContent =
                        datos.mensaje;
                }
            }
        );

        window.addEventListener(
            "popstate",
            router
        );
    }
);