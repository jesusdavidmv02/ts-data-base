import { Producto } from "./src/domain/model/modelo.producto";
import { Categoria } from "./src/domain/model/modelo.categoria";
import { ProductoRepository } from "./src/infrastructure/repositori/producto-repositori";
import { CategoriaRepository } from "./src/infrastructure/repositori/categoria-repositori";
import { Clientes } from "./src/domain/model/modelo.cliente";
import { ClienteRepository } from "./src/infrastructure/repositori/cliente-repositori";

console.log("Sistema de pedidos");

// Clase repository que tiene acceso a la base de datos
const productoRepository = new ProductoRepository();
const categoriaRepository = new CategoriaRepository();
const clienteRepository = new ClienteRepository();
 
// Agregar un producto
const producto = new Producto({
  nombre: "Televisor samsum",
  descripcion: "Televisor 100 pulgadas",
  precio: 1000000,
  cantidad_disponible: 10,
});

const categoria = new Categoria({
  id : "05",
  nombre: "tv",
  descripcion: "Todos los elementos eletrico comon bateria , cargadores etc ",
});

const cliente = new Clientes({
  dni: "05",
  nombre: "Jesus david Mendoaza",
  clave : "xxxxxx",
  correo : "jesusdavidmv02@gmail.com"
});

const main =async () => {

  // const result = await productoRepository.agregarProducto(producto);
  // console.log(result);

  // const productos = await productoRepository.obtenerProductos();
  // console.log(productos);

  // const result1 =  categoriaRepository.agregarCategoria(categoria);
  // console.log(result1);
  
  // const productos = await categoriaRepository.obtenerCategorias();
  // console.log(productos);

  const result1 = clienteRepository.agregarCliente(cliente);
  console.log(result1);
  
}
main();