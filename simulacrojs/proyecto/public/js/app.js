import { router } from "./router.js";

document.addEventListener("DOMContentLoaded", () => {

    console.log("Aplicación iniciada");

    router();

    document.body.addEventListener("click", (e) => {

        const enlace = e.target.closest("[data-link]");

        if (!enlace) return;

        e.preventDefault();

        console.log(
            "Navegando a:",
            enlace.getAttribute("href")
        );

        history.pushState(
            null,
            "",
            enlace.getAttribute("href")
        );

        router();
    });

    window.addEventListener("popstate", () => {

        console.log(
            "Atrás/Adelante:",
            window.location.pathname
        );

        router();
    });
});