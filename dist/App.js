"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const UserRouter_1 = require("./routes/UserRouter");
// import UserService from './services/user.service';
const config = require('../config');
// Creates and configures an ExpressJS web server.
class App {
    // private userService: UserService; 
    // Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    // Configure API endpoints.
    routes() {
        let router = express.Router();
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World!'
            });
        });
        this.express.use('/', router);
        this.express.use('/users', UserRouter_1.default);
        // this.express.use('/authenticate', UserRouter);
        // this.express.use('/register', UserRouter);
    }
}
exports.default = new App().express;
