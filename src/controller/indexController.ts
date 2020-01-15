import { Request, Response } from 'express';

export function getList(req: Request, res: Response){
   res.render('index.html')
}

export function addPedido(req: Request, res: Response){
    res.render('add.html')
 }

 export function getTareas(req: Request, res: Response){
   res.render('tareas.html')
}
 