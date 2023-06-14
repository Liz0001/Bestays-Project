import { Request, Response, NextFunction } from 'express';

export function authorizeSuperAdmin(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { userId, role } = req.session;
    if (!userId || role !== 'super-admin') {
        return res.status(401).json({
            message: 'Unauthorized',
        });
    }
    next();
}
