import express, { type Express, type Request, type Response, type NextFunction } from 'express';

const APP: Express = express();
const PORT = 3000;

APP.get('/users/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { active } = req.query;

    const userId = Number(id);
    if(!Number.isInteger(userId)) {
        return res.status(400).send("Invalid id. Must be a number!");
    };

    if(active !== 'true' && active !== 'false') {
        return res.status(400).send("Active must be true or false!!");
    };

    const isActive = active === 'true';
    return res.send(`User ${userId} is ${ isActive ? 'active' : 'inactive' }`);
})

APP.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
});