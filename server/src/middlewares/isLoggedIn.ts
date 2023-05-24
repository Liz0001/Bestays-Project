import { Request, Response, NextFunction } from 'express';

export function isLoggedIn(req: Request, res: Response, next: NextFunction) {
    const userId = req.session.userId;
    console.log('in isLoggedIn:', userId);

    if (userId) {
        next();
    } else {
        return res
            .status(401)
            .json({ message: 'Unauthorized. Not logged in!' });
    }
}
