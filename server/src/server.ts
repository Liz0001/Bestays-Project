import { config } from 'dotenv';
config();

import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send({ message: 'hello' });
});

app.listen(5000);
