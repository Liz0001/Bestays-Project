import { Request, Response, Router } from 'express';
import bcrypt from 'bcrypt';
import EmailValidator from 'email-validator';
import { validatePassword } from '../middlewares/validatePasswords';
import {
    getUserByEmail,
    createNewUser,
    getUserPasswordForLogin,
} from '../models/user';

const route = Router();
const saltRounds = 10;

route.post('/register', async (req: Request, res: Response) => {
    try {
        let { name, email, password, passwordCheck, timeZone } = req.body;
        name = name.trim();
        email = email.trim();
        password = password.trim();

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

            await createNewUser(name, email, hashedPassword, timeZone);
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

route.post('/login', async (req: Request, res: Response) => {
    try {
        let { email, password } = req.body;
        email = email.trim();
        password = password.trim();

        if (!email || !password) {
            return res
                .status(400)
                .json({ message: 'Email and/or password missing!' });
        }

        const user = await getUserByEmail(email);

        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }

        const userPassword = await getUserPasswordForLogin(email);
        const passwordVerfied = await bcrypt.compare(password, userPassword);

        if (!passwordVerfied) {
            return res.status(401).json({ message: 'Invalid credentials!' });
        } else {
            req.session.userId = user._id.toString();
            req.session.role = user.role;
            req.session.save(() => {
                res.status(200).json({
                    userId: user._id.toString(),
                    role: user.role,
                });
            });
        }
    } catch (error) {
        console.log(`Unable to log in: ${error}`);
        return res.status(500).json({ message: 'Unable to log in!' });
    }
});

route.post('/logout', (req: Request, res: Response) => {
    req.session.destroy(() => {
        res.json({ message: 'User has logged out' });
    });
});

// TODO: forgot password route - send email in authentication/login

export default route;
