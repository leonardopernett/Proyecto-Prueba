"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getList(req, res) {
    res.render('index.html');
}
exports.getList = getList;
function addPedido(req, res) {
    res.render('add.html');
}
exports.addPedido = addPedido;
function getTareas(req, res) {
    res.render('tareas.html');
}
exports.getTareas = getTareas;
