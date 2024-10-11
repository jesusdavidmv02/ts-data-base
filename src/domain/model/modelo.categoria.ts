export class Categoria {
    id : string = ""  ;
    nombre : string = "";
    descripcion  : string = "";
    
    constructor(infoDescripcion: {id: string ,  nombre: string,  descripcion: string;}) {
        this.id = infoDescripcion.id;
        this.nombre = infoDescripcion.nombre;
        this.descripcion = infoDescripcion.descripcion;
      }
}