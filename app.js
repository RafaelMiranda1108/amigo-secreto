document.addEventListener("DOMContentLoaded", () => {
    const participantes = [];

    // Función para agregar amigos a la lista
    window.agregarAmigo = function () {
        let nombre = document.getElementById("amigo").value.trim();

        if (nombre === "") {
            alert("Debe ingresar un nombre válido.");
            return;
        }
        if (participantes.includes(nombre)) {
            alert("Este nombre ya ha sido ingresado.");
            return;
        }

        participantes.push(nombre);
        actualizarLista();
        document.getElementById("amigo").value = "";
    };

    // Función para actualizar la lista en pantalla
    function actualizarLista() {
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        participantes.forEach(nombre => {
            let li = document.createElement("li");
            li.textContent = nombre;
            lista.appendChild(li);
        });
    }

    // Función para realizar el sorteo
    window.sortearAmigo = function () {
        if (participantes.length < 2) {
            alert("Se necesitan al menos dos participantes para realizar el sorteo.");
            return;
        }
        let indiceAleatorio = Math.floor(Math.random() * participantes.length);
        let nombreSorteado = participantes[indiceAleatorio];
        document.getElementById("resultado").innerHTML = `El amigo secreto es: <strong>${nombreSorteado}</strong>`;
    };
});

