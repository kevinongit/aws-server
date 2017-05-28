import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import UserRouter from './routes/UserRouter';
// import UserService from './services/user.service';

const config = require('../config');

// Creates and configures an ExpressJS web server.
class App {
    // ref to Express instance
    public express: express.Application;
    // private userService: UserService; 
    // Run configuration methods on the Express instance.
    constructor(
        
    ) {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configure Express middleware
    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    // Configure API endpoints.
    private routes(): void {
        let router = express.Router();
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World!'
            });
        });
        this.express.use('/', router);
        this.express.use('/users', UserRouter);
        // this.express.use('/authenticate', UserRouter);
        // this.express.use('/register', UserRouter);
    }
}

export default new App().express;