"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'password',
    database: 'pedido',
});
function getPedidos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const pedidos = yield pool.query('SELECT * FROM pedidos ORDER BY id ASC');
        console.log(pedidos.rows);
        res.status(200).json(pedidos.rows);
    });
}
exports.getPedidos = getPedidos;
function savePedidos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { nombre, apellido, email, telefono, direccion, fecha_entrega, hora_entrega } = req.body;
        yield pool.query('INSERT INTO pedidos(nombre , apellido, email, telefono, direccion, fecha_entrega, hora_entrega) VALUES ($1,$2,$3,$4,$5,$6,$7)', [nombre, apellido, email, telefono, direccion, fecha_entrega, hora_entrega]);
        res.redirect('/');
    });
}
exports.savePedidos = savePedidos;
function getTareas(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { tareas } = req.params;
        const pedidos = yield pool.query('SELECT * FROM pedidos WHERE fecha_entrega = $1 ', [tareas]);
        console.log(pedidos);
        res.json(pedidos.rows);
    });
}
exports.getTareas = getTareas;
