import { config } from 'dotenv';
config();

import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import { Request, Response } from 'express';

const app = express();
const uri = process.env.ATLAS_URI || '';
const port = process.env.PORT || 8000;

// const

app.get('/', (req: Request, res: Response) => {
    res.send({ message: 'hello' });
});

const db = mongoose.connect(uri).then(() => {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
});
