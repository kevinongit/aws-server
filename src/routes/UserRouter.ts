import { Router, Request, Response, NextFunction } from 'express';
const Users = [
        { name: "admin",  password: "1234", level: 0 },
        { name: "user1",  password: "1234", level: 0 },
        { name: "user2",  password: "1234", level: 0 },
        { name: "shop1",  password: "1234", level: 0 },
        { name: "shop2",  password: "1234", level: 0 }
    ];

export class UserRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public getAll(req: Request, res: Response, next: NextFunction) {
        console.log('getAll()');
        res.send(Users);
    }

    public authenticate(req: Request, res: Response, next: NextFunction) {
        console.log('authenticate()');
        res.send("authenticate endpoint");
    }

    public register(req: Request, res: Response, next: NextFunction) {
        console.log('register()');
        res.send("register endpoint");
    }

    init() {
        this.router.get('/', this.getAll);
        this.router.get('/authenticate', this.authenticate);
        this.router.get('/register', this.register)
        
    }
}

const userRoutes = new UserRouter();
userRoutes.init();

export default userRoutes.router;