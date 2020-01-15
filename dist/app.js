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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
//routes
const pedidos_1 = __importDefault(require("./routes/pedidos"));
const index_1 = __importDefault(require("./routes/index"));
class App {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.middlwware();
        this.routes();
        this.static();
    }
    config() {
        this.app.set('port', process.env.PORT || 4000);
        this.app.set('views', path_1.default.resolve() + '/views');
        this.app.set('view engine', 'ejs');
        this.app.engine('html', require('ejs').renderFile);
    }
    middlwware() {
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use('/api/pedidos', pedidos_1.default);
        this.app.use(index_1.default.router);
    }
    static() {
        this.app.use(express_1.default.static(path_1.default.resolve() + '/public'));
        console.log(path_1.default.resolve() + '/public');
    }
    server() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port'));
            console.log('server on port ', this.app.get('port'));
        });
    }
}
exports.default = App;
