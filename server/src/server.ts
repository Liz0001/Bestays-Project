import dbConnect from './db/dbConnect';
import { config } from 'dotenv';
config();

import express, { Application } from 'express';
import { Request, Response, NextFunction } from 'express';
import session from 'express-session';
import cors from 'cors';

const app: Application = express();
const port: string | number = process.env.PORT || 8000;
const cookie_secret: any = process.env.COOKIE_SECRET;

import authRoute from './routes/auth';
import userRoute from './routes/user';
import adminRoute from './routes/admin';
import superAdminRoute from './routes/superAdmin';
import { isLoggedIn } from './middlewares/isLoggedIn';

declare module 'express-session' {
    interface SessionData {
        userId: string;
        role: [string];
    }
}

app.set('trust proxy', 1);
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.url}`, req.body);
    next();
});

app.use(
    cors({
        origin: [`http://localhost:${port}`],
        methods: 'GET, POST, PUT, DELETE',
        credentials: true,
    })
);

app.use(
    session({
        name: 'bestays-cookie',
        secret: cookie_secret,
        resave: false,
        saveUninitialized: false,
        cookie: {
            sameSite: true,
            maxAge: 1000 * 60 * 60 * 24, // 1 day
        },
    })
);

// check this
// app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoute); // TODO: 1st to do

app.use('/api/user', isLoggedIn, userRoute); // user specific data - profile etc

// app.use('/api/admin', isLoggedIn, adminRoute); // admin specific data
// app.use('/api/superAdmin', isLoggedIn, superAdminRoute);
// app.use('/api/dateReminder', dateReminderRoute);

app.listen(port, async () => {
    await dbConnect();
    console.log(`Server running on ... http://localhost:${port}`);
});
