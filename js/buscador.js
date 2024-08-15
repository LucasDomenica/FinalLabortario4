const formulario = document.querySelector("#formulario");
const boton = document.querySelector("#boton");
const resultado = document.querySelector("#resultado");

const filtrar = () =>{
    resultado.innerHTML="";

    const texto= formulario.value.toLowerCase();

    for(let producto of productos){
        let nombre = producto.titulo;
        if(nombre.indexOf(texto) === -1){
            resultado.innerHTML +=
            `<li>${producto.id} - Precio: ${producto.precio}</li>`;
        };
    };
};

if(resultado.innerHTML===""){
    resultado.innerHTML +=
            `<li>Producto no encontrado...</li>` ;
};

boton.addEventListener("click", filtrar);
formulario.addEventListener("keyup", filtrar);

filtrar();