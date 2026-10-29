//--------------------------Metodos utilziados (map,filter,reduce)-----------------------------//

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


//--------------------------------------- Cálculo de métrica financieras de una empresa -----------------------------//

const ventasDelDia = [
    {ticketId: "T1", monto: 120.50},
    {ticketId: "T2", monto: 350.00},
    {ticketId: "T3", monto: 80.00}
];

// Queremos calcular la suma de todos los 'monto'. El valor inicial del acumulador es 0.

const totalIngresos = ventasDelDia.reduce((acumulador, venta) => {
    return acumulador + venta.monto  ;

}, 0);

console.log(totalIngresos);

//------------------------------------- sistema de facturación para una tienda en linea -----------------------------------------//

const carritoCompras = [
    { producto: "teclado Mecánico", cantidad: 2, precioUnitario: 45},
    { producto: "Ratón Ergonómico", cantidad: 1, precioUnitario: 25 },
    { producto: "Monitor 4K", cantidad: 1, precioUnitario: 300 },
    { producto: "Cable HDMI", cantidad: 3, precioUnitario: 10 }
];

const totalAcomprar = carritoCompras.reduce((acumulador,producto)=>{
return acumulador + (producto.cantidad * producto.precioUnitario);
},0);

console.log(`EL total a pagar de la orden es: ${totalAcomprar}`);


//-------------------------------------Metodos utilizados (find, some, every)---------------------------------------------//
//-------------------------------------metodo find para encontrar un usuario por su id------------------------------------//
const usuariosEncontrado = usuarios.find(usuario => usuario.id === 1);

console.log("Resultado = ", usuariosEncontrado);

//-------------------------------------metodo some verificar si un producto tiene stock------------------------------------//

const carrito = [
    { producto: "Teclado", stock: 10},
    { producto: "Pantalla", stock: 0}
];

const hayProductosAgotados = carrito.some(item => item.stock === 0);

console.log(hayProductosAgotados);

//-------------------------------------metodo every verificar si todos los documentos fueron revisados------------------------------------//
const documentos = [
    { nombre: "ID", verificado: true},
    { nombre: "Domicilio", verificado: true}
]

const todoAprobado = documentos.every(doc  => doc.verificado === true);

console.log(todoAprobado);


//----------------------------------ejercicios con los tres metodos anteriores para sistema de Gestión de Envíos----------------------------------//

const envios = [
    { trackingId: "ENV-001", cliente: "Acme Corp", entregado: true, pesoKg: 12 },
    { trackingId: "ENV-002", cliente: "Logistics Inc", entregado: false, pesoKg: 45 },
    { trackingId: "ENV-003", cliente: "Global Trade", entregado: true, pesoKg: 8 }
];

const envioBuscado = envios.find(envio => envio.trackingId === "ENV-002");
const hayCargaPesada = envios.some(envio => envio.pesoKg > 40);
const todosEntregados = envios.every(envio => envio.entregado === true);

console.log(envioBuscado,hayCargaPesada,todosEntregados);

