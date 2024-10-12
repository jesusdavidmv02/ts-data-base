import { Pool, RowDataPacket } from "mysql2/promise";
import { Categoria } from "../../domain/model/modelo.categoria";
import { getPoolConnection } from "../../../DB/Source";




export class CategoriaRepository {
    

    async agregarCategoria (categoria: Categoria){

        const connection: Pool = getPoolConnection();
        const querySql = `INSERT INTO categorias (id,nombre, descripcion) VALUES (?,?,?)`;
        const values = [categoria.id, categoria.nombre, categoria.descripcion];
    
        //const result = await connection.query(querySql, values);
       // return result;

        connection.query(querySql, values)
        .then((result) => {
            return result
        })
        .catch((error) => {
            console.error('Error  : ', error);
        });

    }

    async obtenerCategorias(){
        const connection = getPoolConnection();
        const querySql = `SELECT * FROM categorias`;
        const result = await connection.query(querySql);
        return result;
    }

    async obtenerCategoria(idCategoria: number): Promise<RowDataPacket[]> {
        const connection = getPoolConnection();
        const querySql = `SELECT * FROM categorias WHERE id = ?`;
        const values = [idCategoria];
        const queryResult = await connection.query<RowDataPacket[]>(querySql, values);
        return queryResult[0];
    }

}