import { error } from "console";
import { Clientes } from "../../domain/model/modelo.cliente";
import { ClienteRepository } from "../repositori/cliente-repositori";

export class clienteController {

    private repository : ClienteRepository  ;

    constructor() {
        this.repository = new ClienteRepository();     
    }

    agregar (index : {dni : string ; nombre : string  ; clave : string ; correo : string }) {
      const cliente = new Clientes({dni: index.dni,  nombre : index.nombre , clave: index.clave , correo : index.correo})
      
      this.repository.agregarCliente(cliente).then(rta => {
         console.log("Cliente agregado correctamente : ")
         return rta;
      }).catch(error => {
        console.error('El error #%d' + error)
      })
      
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