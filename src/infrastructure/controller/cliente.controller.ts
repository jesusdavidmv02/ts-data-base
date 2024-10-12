import { Clientes } from "../../domain/model/modelo.cliente";
import { ClienteRepository } from "../repositori/cliente-repositori";

export class clienteController {

    private repository : ClienteRepository  ;

    constructor() {
        this.repository = new ClienteRepository();     
    }

    async agregar (index : {dni : string ; nombre : string  ; clave : string ; correo : string }) {
        const cliente = new Clientes({dni: index.dni,  nombre : index.nombre , clave: index.clave , correo : index.correo})
        const result = await this.repository.agregarCliente(cliente);
        console.log("cliente agregado correcatmente ");
        return result;
    }

    async obtener() {
        const result = await this.repository.obtenerClientes();
        console.log("Esto son los Clientes : ");
        console.log(result[0]);
        return result;
      }
    
      async obtenerPorId(id: number) {
        const result = await this.repository.obtenerCliente(id);
        console.log("este es el cliente buscado : ");
        console.log(result);
        return result;
      }
    


    
}