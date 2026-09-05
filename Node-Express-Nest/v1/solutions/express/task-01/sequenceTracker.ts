import type { Request, Response, NextFunction } from 'express';

export const sequenceTracker = (label: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        console.log(`[Sequence] -> ${label}`);
        next();
    };
};