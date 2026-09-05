import type { Request, Response, NextFunction } from 'express';

export const timer = (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();
    res.on('finish', () => {
        console.log(`[TIMER] ${req.method} ${req.url} - ${Date.now() - start}ms`);
    });
    next();
};