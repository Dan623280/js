import { obtenerSesion } from "../auth.js";

export default function Dashboard() {

    const usuario = obtenerSesion();

    return `
        <h1>Dashboard</h1>

        <p>
            Bienvenido ${usuario.correo}
        </p>

        <button id="logout">
            Cerrar sesión
        </button>
    `;
}