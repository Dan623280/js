const formulario =document.getElementById("loginForm");

formulario.addEventListener("submit",async (e) => {

        e.preventDefault();

        const correo =document.getElementById("correo").value;
        const password =document.getElementById("password").value;

        const respuesta =

            await fetch("/verificacion",
                {
                    method: "POST",
                    headers: {"Content-Type":"application/json"},
                    body:JSON.stringify({correo,password})
                }
            );
        
        if (respuesta.ok) {

            localStorage.setItem("usuario",JSON.stringify(datos.usuario));
        }
        
        const datos = await respuesta.json();
        document.getElementById("mensaje").textContent = datos.mensaje;

    }
);