//-------------------------- traer los correos con el metood .map -----------------------------//

const usuarios = [
    {id: 1 , nombre: "Juan", email:"juan@gmail.com"},
    {id: 2, nombre: "David", email:"david@gmail.com"}
];

console.log(usuarios.map(usuario => usuario.email));


//--------------------Utilizando metodo filter para devolver un nuevo array -------------------//

const productos = [
    {nombre:"laptop", stock:5},
    {nombre:"teclado", stock:0},
    {nombre:"raton", stock:12}
];

console.log(productos.filter(producto => producto.stock > 0))


//------------------------------------- función fecha para validar su es mayor de edad ------------------------------//

const esMayorEdad = edad => edad >= 18;

console.log(esMayorEdad(18));

//-------------------------------------- Procesamiento de pedidos -------------------------------------------------//

const pedidos = [
    { id: 101, cliente: "TechCorp", total: 1500, estado: "pagado" },
    { id: 102, cliente: "Innovate LLC", total: 450, estado: "pendiente" },
    { id: 103, cliente: "DevStudio", total: 2200, estado: "pagado" },
    { id: 104, cliente: "Alpha Inc", total: 800, estado: "cancelado" }
];

let pedidosValidos = pedidos.filter(estadoPedido => estadoPedido.estado === "pagado");
let resumenFacturas = pedidosValidos.map(pedido => pedido = `Pedido ${pedido.id} para ${pedido.cliente} - Total: ${pedido.total}`);
console.log(resumenFacturas);


