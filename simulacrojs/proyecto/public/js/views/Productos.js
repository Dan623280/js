export default async function Productos() {

    const respuesta =
        await fetch("/api/productos");

    const productos =
        await respuesta.json();

    return `
        <h1>Productos</h1>

        ${productos.map(producto => `
            <div class="card">

                <h3>
                    ${producto.nombre}
                </h3>

                <p class="precio">
                    $${producto.precio}
                </p>

            </div>
        `).join("")}
    `;
}