"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controller/indexController");
class IndexRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', indexController_1.getList);
        this.router.get('/add', indexController_1.addPedido);
        this.router.get('/tareas', indexController_1.getTareas);
    }
}
const indexRouter = new IndexRouter();
exports.default = indexRouter;
