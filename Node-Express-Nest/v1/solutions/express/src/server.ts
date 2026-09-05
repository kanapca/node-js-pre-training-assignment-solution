import express, { type Express, type Request, type Response } from 'express';
import { logger } from './task-01/logger';
import { timer } from './task-01/timer';
import { headerInjector } from './task-01/headerInjector';
import { sequenceTracker } from './task-01/sequenceTracker';

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

const app: Express = express();

app.use(sequenceTracker('logger (start)'), logger);
app.use(sequenceTracker('timer (start)'), timer);
app.use(sequenceTracker('header (start)'), headerInjector);

app.get('/', (req: Request, res: Response) => {
    res.send('hello, world!!!');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
});