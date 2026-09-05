import express, { type Express, type Request, type Response, type NextFunction } from 'express';

const APP: Express = express();
const PORT = 3000;

APP.use((req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - ${Date.now() - start}ms`);
    next();
})

APP.get('/', (req: Request, res: Response) => {
    res.send('hello, world!');
});

APP.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`)
});