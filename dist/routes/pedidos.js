"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedidoController_1 = require("../controller/pedidoController");
class PedidoRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', pedidoController_1.getPedidos);
        this.router.post('/', pedidoController_1.savePedidos);
        this.router.get('/:tareas', pedidoController_1.getTareas);
    }
}
const pedidoRouter = new PedidoRouter();
exports.default = pedidoRouter.router;
