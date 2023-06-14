import { Request, Response, Router } from 'express';
const route = Router();

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'in user route' });
});

// route.get('/:id', (req: Request, res: Response) => {
//     res.json({ message: 'user path' });
// });

export default route;
