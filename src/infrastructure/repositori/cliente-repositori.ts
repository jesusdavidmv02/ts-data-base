import { Pool, RowDataPacket } from "mysql2/promise";
import { getPoolConnection } from "../../../DB/Source";
import { Clientes } from "../../domain/model/modelo.cliente";

export class ClienteRepository {
    
    async agregarCliente (cliente: Clientes){

        const connection: Pool = getPoolConnection();
        const querySql = `INSERT INTO clientes (dni,nombre, clave, correo) VALUES (?,?,?,?)`;
        const values = [cliente.dni, cliente.nombre, cliente.clave , cliente.correo];
    
        try {
            const result = await connection.query(querySql, values); 
            return result;
        } catch (error) {
            console.error("Error "+ error);
        } 

    }

    async obtenerClientes(){
        const connection = getPoolConnection();
        const querySql = `SELECT * FROM clientes`;
        const result = await connection.query(querySql);
        return result;
    }

    async obtenerCliente(idCliente: number): Promise<RowDataPacket[]> {
        const connection = getPoolConnection();
        const querySql = `SELECT * FROM clientes WHERE id = ?`;
        const values = [idCliente];
        const queryResult = await connection.query<RowDataPacket[]>(querySql, values);
        return queryResult[0];
    }

}