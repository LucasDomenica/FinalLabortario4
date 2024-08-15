//Productos
const productos=[
//Almacenamiento
{
    id: "SSD Nvme 240GB",
    titulo:"SSD Nvme 240GB",
    imagen:"./img/Componentes/Almacenamiento/descarga (12).jpg",
    categoria:{
        nombre:"Perifericos y Componentes",
        id:"componentes"
    },
    precio:15000
},
{
    id: "SSD 480GB",
    titulo:"SSD 480GB",
    imagen:"./img/Componentes/Almacenamiento/descarga (11).jpg",
    categoria:{
        nombre:"Perifericos y Componentes",
        id:"componentes"
    },
    precio:10000
},
{
    id: "Disco duro 1tb",
    titulo:"Disco duro 1tb",
    imagen:"./img/Componentes/Almacenamiento/descarga (10).jpg",
    categoria:{
        nombre:"Perifericos y Componentes",
        id:"componentes"
    },
    precio:15000
},
//Procesadores
{
    id: "Ryzen 7",
    titulo:"Ryzen 7",
    imagen:"./img/Componentes/Procesadores/img5.jpg",
    categoria:{
        nombre:"Perifericos y Componentes",
        id:"componentes"
    },
    precio:200000
},
{
    id: "Ryzen 3",
    titulo:"Ryzen 3",
    imagen:"./img/Componentes/Procesadores/images (1).jpg",
    categoria:{
        nombre:"Perifericos y Componentes",
        id:"componentes"
    },
    precio:60000
},
{
    id: "Ryzen 5",
    titulo:"Ryzen 5",
    imagen:"./img/Componentes/Procesadores/descarga (6).jpg",
    categoria:{
        nombre:"Perifericos y Componentes",
        id:"componentes"
    },
    precio:90000
},
{
    id: "Intel 5",
    titulo:"Intel 5",
    imagen:"./img/Componentes/Procesadores/descarga (8).jpg",
    categoria:{
        nombre:"Perifericos y Componentes",
        id:"componentes"
    },
    precio:80000
},
{
    id: "Ryzen 9",
    titulo:"Ryzen 9",
    imagen:"./img/Componentes/Procesadores/descarga (9).jpg",
    categoria:{
        nombre:"Perifericos y Componentes",
        id:"componentes"
    },
    precio:250000
},
//Placas de video
{
    id: "Gigabyte Gtx 1050",
    titulo:"Gigabyte Gtx 1050",
    imagen:"./img/Componentes/Placa de videos/descarga (13).jpg",
    categoria:{
        nombre:"Perifericos y Componentes",
        id:"componentes"
    },
    precio:70000
},
{
    id: "Ventus Gtx 3080",
    titulo:"Ventus Gtx 3080",
    imagen:"./img/Componentes/Placa de videos/descarga (14).jpg",
    categoria:{
        nombre:"Perifericos y Componentes",
        id:"componentes"
    },
    precio:70000
},
//Perifericos
{
    id: "Logitech",
    titulo:"Logitech",
    imagen:"./img/Componentes/Perifericos/img7.jpg",
    categoria:{
        nombre:"Perifericos y Componentes",
        id:"componentes"
    },
    precio:30000
},
{
    id: "Monitor 24 pulgadas",
    titulo:"Monitor 24 pulgadas",
    imagen:"./img/Componentes/Perifericos/img4.jpg",
    categoria:{
        nombre:"Perifericos y Componentes",
        id:"componentes"
    },
    precio:150000
},
{
    id: "Monitor 32 pulgadas curvo",
    titulo:"Monitor 32 pulgadas curvo",
    imagen:"./img/Componentes/Perifericos/images (4).jpg",
    categoria:{
        nombre:"Perifericos y Componentes",
        id:"componentes"
    },
    precio:200000
},
{
    id: "RTX 1660 6GB Zotac",
    titulo:"RTX 1660 6GB Zotac",
    imagen:"./img/Componentes/promocion/imagen1.jpg",
    categoria:{
        nombre:"Ofertas",
        id:"ofertas"
    },
    precio:200000
},
{
    id: "RTX 2080 Super",
    titulo:"RTX 2080 Super",
    imagen:"./img/Componentes/promocion/imagen3.jpg",
    categoria:{
        nombre:"Ofertas",
        id:"ofertas"
    },
    precio:300000
},
{
    id: "Pc I7 8va, GTX 1650",
    titulo:"Pc I7 8va, GTX 1650",
    imagen:"./img/Componentes/pcArm/imagen1.jpg",
    categoria:{
        nombre:"Pc armadas",
        id:"pc"
    },
    precio:600000
},
{
    id: "Pc Ryzen 5 5600g 16gb ram",
    titulo:"Pc Ryzen 5 5600g 16gb",
    imagen:"./img/Componentes/pcArm/imagen2.jpg",
    categoria:{
        nombre:"Pc armadas",
        id:"pc"
    },
    precio:600000
},
{
    id: "Mother Aorus Pro",
    titulo:"Mother Aorus Pro",
    imagen:"./img/Componentes/Motherboards/img6.jpg",
    categoria:{
        nombre:"Ofertas",
        id:"ofertas"
    },
    precio:120000
},
{
    id: "Procesador Ryzen 7",
    titulo:"Procesador Ryzen 7",
    imagen:"./img/Componentes/Procesadores/img5.jpg",
    categoria:{
        nombre:"Ofertas",
        id:"ofertas"
    },
    precio:170000
},
{
    id: "Monitor 24'' ",
    titulo:"Monitor 24'' ",
    imagen:"./img/Componentes/Perifericos/img4.jpg",
    categoria:{
        nombre:"Ofertas",
        id:"ofertas"
    },
    precio:100000
},
{
    id: "Auriculares Logitech",
    titulo:"Auriculares Logitech",
    imagen:"./img/Componentes/Perifericos/img7.jpg",
    categoria:{
        nombre:"Ofertas",
        id:"ofertas"
    },
    precio:50000
},
//
];


const contenedorProductos= document.querySelector("#contenedor-productos");
const botonesCategorias= document.querySelectorAll(".boton-categoria");
const tituloPrincipal= document.querySelector("#titulo-principal");
let bontonesAgregar= document.querySelectorAll(".producto-agregar");
const numerito= document.querySelector(".numerito");

/*-----Buscador*/
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const resultado = document.getElementById('resultado');
    const contenedorProductos = document.querySelector("#contenedor-productos");

    // Agregar evento de cambio al input del buscador
    formulario.addEventListener('input', function () {
        const busqueda = formulario.value.toLowerCase().trim();

        // Lógica de búsqueda
        const resultadoFiltrado = productos.filter(function (producto) {
            return (
                producto.titulo.toLowerCase().includes(busqueda) ||
                producto.categoria.nombre.toLowerCase().includes(busqueda)
            );
        });

        // Mostrar resultado en el contenedor de productos
        mostrarResultados(resultadoFiltrado);
    });

   // Función para mostrar resultados en el DOM
function mostrarResultados(resultado) {
    // Limpiar resultados anteriores
    contenedorProductos.innerHTML = '';

    // Verificar si hay resultados
    if (resultado.length > 0) {
        // Crear elementos de lista para cada resultado
        resultado.forEach(function (producto) {
            // Verificar que las propiedades necesarias existan
            if (producto.titulo && producto.imagen && producto.categoria && producto.precio) {
                const itemResultado = document.createElement('div');
                itemResultado.classList.add('producto');
                itemResultado.innerHTML = `
                    <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-precio">${producto.precio}</p>
                        <button class="producto-agregar" id="${producto.id}">Agregar</button>
                    </div>`;
                contenedorProductos.appendChild(itemResultado);
            } else {
                console.error('El objeto del producto no tiene todas las propiedades necesarias:', producto);
            }
        });
    } else {
        // Mostrar un mensaje si no hay resultados
        const mensajeNoResultados = document.createElement('div');
        mensajeNoResultados.textContent = 'No se encontraron resultados';
        contenedorProductos.appendChild(mensajeNoResultados);
    }

    // Actualizar botones de agregar
    actualizarBotonesAgregar();
}

});





function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML="";

    productosElegidos.forEach(producto=>{
        const div= document.createElement("div");
        div.classList.add("producto");
        div.innerHTML=`
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
           <h3 class="producto-titulo">${producto.titulo}</h3>
           <p class="producto-precio">${producto.precio}</p>
           <button class="producto-agregar" id="${producto.id}">Agregar</button>
         </div>`;
        contenedorProductos.append(div);
    })
 actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton=>{
    boton.addEventListener("click",(e)=>{
        botonesCategorias.forEach(boton=>boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id!= "todos"){
           const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);

            tituloPrincipal.innerText= productoCategoria.categoria.nombre; //modifica el nombre, arreglar//

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else{
            tituloPrincipal.innerText= "Todos los productos";
            cargarProductos(productos);
        }
        
    })
});

function actualizarBotonesAgregar(){
    bontonesAgregar= document.querySelectorAll(".producto-agregar");

    bontonesAgregar.forEach(boton=>{
        boton.addEventListener("click", agregarAlCarrito);
    });
}
 
let productosEnCarrito;

let productosEnCarritoLS= localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS){
    productosEnCarrito= JSON.parse(productosEnCarritoLS);
    actualizarNumerito();

}else{
    productosEnCarrito =[];
}


function agregarAlCarrito(e){

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();


    const idBoton = e.currentTarget.id;
    const productoAgregado=productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto=> producto.id === idBoton)){

        const index= productosEnCarrito.findIndex(producto=> producto.id === idBoton);
        productosEnCarrito[index].cantidad++;

    }else{
        productoAgregado.cantidad=1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

function actualizarNumerito(){

    let nuevoNumerito = productosEnCarrito.reduce((acc, producto)=> acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

