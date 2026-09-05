import type { Request, Response, NextFunction } from 'express';

export const headerInjector = (req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Custom', 'my-express-app');
    res.setHeader('Request-id', crypto.randomUUID());
    res.setHeader('App-Version', '1.0.0');
    next();
};