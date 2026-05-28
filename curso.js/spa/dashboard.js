export function dashboardView() {

    const usuario = JSON.parse(
        localStorage.getItem("usuario")
    );

    if (!usuario) {

        history.pushState(null, null, "/");

        return `
            <h1>No autorizado</h1>
        `;
    }

    return `
        <h1>Bienvenido ${usuario.usuario}</h1>

        <button id="logout">
            Cerrar sesión
        </button>
    `;
}