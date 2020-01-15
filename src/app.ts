import express, {Application} from 'express'
import morgan from  'morgan';
import path from 'path'


//routes
import router from './routes/pedidos'
import indexRouter from './routes/index'

class App {
    public app:Application;
    
    constructor(){
        this.app = express();
        this.config();
        this.middlwware();
        this.routes();
        this.static();
    }

    config(){
        this.app.set('port', process.env.PORT || 4000);
        this.app.set('views', path.resolve()+'/views')
        this.app.set('view engine', 'ejs');
        this.app.engine('html',require('ejs').renderFile) 
    }

    middlwware(){
      this.app.use(morgan('dev'))
      this.app.use(express.urlencoded({extended:false}));
      this.app.use(express.json());
    }

    routes(){
     this.app.use('/api/pedidos',router)
     this.app.use(indexRouter.router)
    }

    static(){
      this.app.use(express.static(path.resolve()+'/public'))
      console.log(path.resolve()+'/public')
    }

   async server(){
     await this.app.listen(this.app.get('port'));
     console.log('server on port ', this.app.get('port'));
    }
}


export default App;