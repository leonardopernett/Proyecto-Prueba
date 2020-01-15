import { Request, Response } from 'express';
import {Pool} from 'pg';

const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'password',
    database:'pedido',
});

export async function getPedidos(req: Request, res: Response) {
    const pedidos = await pool.query('SELECT * FROM pedidos ORDER BY id ASC');
    console.log(pedidos.rows)
    res.status(200).json(pedidos.rows);
  
}

export async function savePedidos(req: Request, res: Response) {
    const {nombre , apellido, email, telefono, direccion, fecha_entrega, hora_entrega} = req.body
    await pool.query('INSERT INTO pedidos(nombre , apellido, email, telefono, direccion, fecha_entrega, hora_entrega) VALUES ($1,$2,$3,$4,$5,$6,$7)',[nombre , apellido, email, telefono, direccion, fecha_entrega, hora_entrega])
    res.redirect('/');
}

export async function getTareas(req: Request, res: Response) {
    const {tareas} = req.params
    const pedidos = await pool.query('SELECT * FROM pedidos WHERE fecha_entrega = $1 ', [tareas]);
    console.log(pedidos)
    res.json(pedidos.rows);
}



