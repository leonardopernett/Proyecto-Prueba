
import {Router, Response, Request} from 'express'
import {getList, addPedido, getTareas} from '../controller/indexController'

class IndexRouter {

    public router:Router

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
      this.router.get('/',getList);
      this.router.get('/add',addPedido);
      this.router.get('/tareas',getTareas);
     
    }
}

const indexRouter = new IndexRouter();

export default indexRouter
