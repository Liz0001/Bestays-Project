import { Request, Response, Router } from 'express';
import bcrypt from 'bcrypt';

import EmailValidator from 'email-validator';
import { validatePassword } from '../middlewares/validatePasswords';
import { getUserByEmail, createNewUser } from '../models/user';

const route = Router();
const saltRounds = 10;

route.post('/register', async (req: Request, res: Response) => {
    try {
        const { name, email, password, passwordCheck, timeZone } = req.body;

        const validatedEmail = EmailValidator.validate(email);
        const validatedPassword = validatePassword(password);
        const emailExists = await getUserByEmail(email);

        if (!name || !email || !password || passwordCheck !== password) {
            return res.status(400).json({
                message: 'Parameters are missing or passwords not matching!',
            });
        }

        if (!validatedEmail || !validatedPassword) {
            return res.status(400).json({
                message: 'Email is not valid or password is not strong enough!',
            });
        }

        if (!emailExists) {
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const newUser = await createNewUser(
                name,
                email,
                hashedPassword,
                timeZone
            );
            console.log('account created:', newUser);

            return res
                .status(201)
                .json({ message: 'New user successfully created!' });
        } else {
            return res.status(400).json({ message: 'Email already exists!' });
        }
    } catch (error) {
        console.log(`Unable to register user: ${error}`);
        return res.status(500).json({ message: 'Unable to register user!' });
    }
});

route.post('/login', (req: Request, res: Response) => {
    // check if email exists
    // check is passwords match bcypt
    // assign cookie or session id or smtg like that

    // const userId = 1;
    // res.set('Set-Cookie', `session=${userId}`);
    // res.send('success - logged in');

    // req.session.userId = newUser;

    res.send('login route');
});

route.post('/logout', (req: Request, res: Response) => {
    // check if session exists
    // if exits destroy
    // else send error
    req.session.destroy(() => {
        console.log('in Auth logged out function');
        res.json({ message: 'User has logged out' });
    });
});

// TODO: forgot password

export default route;
