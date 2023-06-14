import { Request, Response, NextFunction } from 'express';

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const userId = req.session.userId;

    if (userId) {
        next();
    } else {
        return res
            .status(401)
            .json({ message: 'Unauthenticated. Not logged in!' });
    }
}
