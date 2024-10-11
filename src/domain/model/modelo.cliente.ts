export class cliente {

    dni : string =  ""; 
    nombre :string = "";
    clave : string = "" ;
    correo : string = "";

    constructor(infoCliente : { dni :string,  nombre :string, clave:string , correo :string }){
       this.dni = infoCliente.dni
       this.nombre = infoCliente.nombre
       this.clave = infoCliente.clave
       this.correo =  infoCliente.correo
    }

}