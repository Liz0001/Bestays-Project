import { Request, Response, Router } from 'express';
const route = Router();

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'in superAdmin route' });
});

export default route;
