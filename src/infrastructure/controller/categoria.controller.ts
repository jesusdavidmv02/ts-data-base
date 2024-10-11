import { Categoria } from "../../domain/model/modelo.categoria";
import { CategoriaRepository } from "../categoria-repositori";



export class CategoriaController {
  private repository: CategoriaRepository;

  constructor() {
    // Clase repository que tiene acceso a la base de datos
    this.repository = new CategoriaRepository();
  }

  async agregar(payload: {
    id : string;
    nombre: string;
    descripcion: string;
  }) {
    const producto = new Categoria({
      id:payload.id,
      nombre: payload.nombre,
      descripcion: payload.descripcion
    });
    const result = await this.repository.agregarCategoria(producto);
    console.log("Producto agregado");
    return result;
  }

  async obtener() {
    const result = await this.repository.obtenerCategorias();
    console.log("Categoria Obtenidas");
    console.log(result[0]);
    return result;
  }

  async obtenerPorId(id: number) {
    const result = await this.repository.obtenerCategoria(id);
    console.log("Categoria obtenido");
    console.log(result);
    return result;
  }

}
