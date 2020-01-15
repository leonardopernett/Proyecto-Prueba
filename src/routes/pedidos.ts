
import {Router, Response, Request} from 'express'
import {getPedidos, savePedidos, getTareas} from '../controller/pedidoController'

class PedidoRouter {

    public router:Router

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
      this.router.get('/',getPedidos);
      this.router.post('/',savePedidos);
      this.router.get('/:tareas', getTareas)
     
    }
}

const pedidoRouter = new PedidoRouter();

export default pedidoRouter.router
