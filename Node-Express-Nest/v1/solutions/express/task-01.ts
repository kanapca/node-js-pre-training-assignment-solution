import express, { type Express, type Request, type Response, type NextFunction } from 'express';

const APP: Express = express();
const PORT = 3000;

const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`[LOGGER] ${req.method} ${req.url}`);
    next();
}

const timer = (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();
    res.on('finish', () => {
        console.log(`[TIMER] ${req.method} ${req.url} - ${Date.now() - start}ms`);
    });
    next();
};

const headerInjector = (req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Custom', 'my-express-app');
    res.setHeader('Request-id', crypto.randomUUID());
    res.setHeader('App-Version', '1.0.0');
    next();
};

const sequenceTracker = (label: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        console.log(`[Sequence] -> ${label}`);
        next();
    }
}

APP.use(sequenceTracker('logger (start)'), logger);
APP.use(sequenceTracker('timer (start)'), timer);
APP.use(sequenceTracker('header (start)'), headerInjector);

APP.get('/', (req: Request, res: Response) => {
    res.send('hello, world!');
});

APP.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`)
});