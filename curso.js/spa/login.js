
export function loginView() {

    return `
        <h1>Login</h1>

        <form id="loginForm">

            <input 
                type="text" 
                id="usuario"
                placeholder="Usuario"
            >

            <input 
                type="password"
                id="password"
                placeholder="Password"
            >

            <button>Ingresar</button>

        </form>

        <p id="mensaje"></p>
    `;
}

export async function iniciarSesion() {

    const usuario = document.getElementById("usuario").value;

    const password = document.getElementById("password").value;

    const respuesta = await fetch("./datos/usuarios.json");

    const usuarios = await respuesta.json();

    

    const encontrado = usuarios.find(user => 
        user.usuario === usuario &&
        user.password === password
    );

    if (encontrado) {

        localStorage.setItem(
            "usuario",
            JSON.stringify(encontrado)
        );

        history.pushState(null, null, "/dashboard");

        window.dispatchEvent(new PopStateEvent("popstate"));

    } else {

        document.getElementById("mensaje").textContent =
            "Usuario incorrecto";
    }
}