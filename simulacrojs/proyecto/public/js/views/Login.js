export default function Login() {
    return `
        <h1>Iniciar Sesión</h1>

        <form id="loginForm">

            <input
                type="email"
                id="correo"
                placeholder="Correo"
                required
            >

            <input
                type="password"
                id="password"
                placeholder="Contraseña"
                required
            >

            <button type="submit">
                Entrar
            </button>

        </form>

        <p id="mensaje"></p>
    `;
}