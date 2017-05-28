"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Users = [
    { name: "admin", password: "1234", level: 0 },
    { name: "user1", password: "1234", level: 0 },
    { name: "user2", password: "1234", level: 0 },
    { name: "shop1", password: "1234", level: 0 },
    { name: "shop2", password: "1234", level: 0 }
];
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    getAll(req, res, next) {
        console.log('getAll()');
        res.send(Users);
    }
    authenticate(req, res, next) {
        console.log('authenticate()');
        res.send("authenticate endpoint");
    }
    register(req, res, next) {
        console.log('register()');
        res.send("register endpoint");
    }
    init() {
        this.router.get('/', this.getAll);
        this.router.get('/authenticate', this.authenticate);
        this.router.get('/register', this.register);
    }
}
exports.UserRouter = UserRouter;
const userRoutes = new UserRouter();
userRoutes.init();
exports.default = userRoutes.router;
