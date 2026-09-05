import express, { type Express, type Request, type Response, type NextFunction } from 'express';

const APP: Express = express();
const PORT = 3000;

APP.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
})

APP.get('/', (req: Request, res: Response) => {
    res.send('hello, world!');
});

APP.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`)
});