let btnMenu =document.getElementById('btn-menu');
let mainNav=document.getElementById('main-nav');
btnMenu.addEventListener('click',function(){
    mainNav.classList.toggle('mostrar');
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