import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { PageStatus } from '../../../enums/pageStatus';
import LoadingSpinner from '../../general/LoadingSpinner';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../../store/features/loginRegister/registerSlice';
import { Box, Button, Container, Link, TextField } from '@mui/material';
import { toast } from 'react-hot-toast';
import EmailValidator from 'email-validator';
import './register.css';

export function Register() {
    // const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const register = useSelector((state: RootState) => state.register);

    const myTimeZone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;
    const [userSignUpData, setUserSignUpData] = useState({
        name: '',
        email: '',
        password: '',
        passwordCheck: '',
        timeZone: myTimeZone(),
    });

    const changeHandler = (e: any) => {
        setUserSignUpData({
            ...userSignUpData,
            [e.target.name]: e.target.value,
        });
    };

    const [validateName, setValidateName] = useState(false);
    const [validateEmail, setValidateEmail] = useState(false);
    const [validatePass, setValidatePass] = useState(false);

    useEffect(() => {
        const name = userSignUpData.name.trim().length > 0;
        setValidateName(name);

        const email = EmailValidator.validate(userSignUpData.email);
        setValidateEmail(email);

        const digitRegex = /[0-9]/;
        const specialSymbolRegex = /[!@#$%^&*]/;

        const hasDigit = digitRegex.test(userSignUpData.password);
        const hasSpecialSymbol = specialSymbolRegex.test(
            userSignUpData.password
        );

        const isWithinLengthRange = userSignUpData.password.length >= 6;
        const passwordsMatch =
            userSignUpData.password == userSignUpData.passwordCheck;

        if (
            hasDigit &&
            hasSpecialSymbol &&
            isWithinLengthRange &&
            passwordsMatch
        ) {
            setValidatePass(true);
        } else {
            setValidatePass(false);
        }
    }, [userSignUpData]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (userSignUpData.password != userSignUpData.passwordCheck) {
            toast.error(`Passwords don't match`);
        }

        if (!validatePass) {
            toast.error(
                `Password must be at least: 6 letters, 1 special symbol, 1 number!`
            );
        }

        if (!validateEmail) {
            toast.error(`This email is not valid!`);
        }

        if (!validateName) {
            toast.error(`Name can't be empty!`);
        }

        if (validateName && validateEmail && validatePass) {
            dispatch(registerUser(userSignUpData));
        }
    };

    if (register.registerStatus == PageStatus.loading) {
        return <LoadingSpinner />;
    }

    return (
        <Container
            maxWidth="xs"
            sx={{ py: 3 }}
            style={{
                width: '100vw',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                justifyContent: 'center',
            }}
        >
            <h1 className="heading">Create Account</h1>
            <Box
                className="reg-form"
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
            >
                <TextField
                    autoComplete="name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    onChange={changeHandler}
                    value={userSignUpData.name}
                />
                <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={changeHandler}
                    value={userSignUpData.email}
                />
                <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={changeHandler}
                    value={userSignUpData.password}
                    helperText="Password must be at least: 6 letters, 1 special symbol, 1 number!"
                />
                <TextField
                    required
                    fullWidth
                    name="passwordCheck"
                    label="Repeat Password"
                    type="password"
                    id="passwordCheck"
                    autoComplete="new-password"
                    className="password"
                    onChange={changeHandler}
                    value={userSignUpData.passwordCheck}
                />

                <Button type="submit" variant="contained">
                    Sign up
                </Button>
            </Box>

            <Link href="/signin" variant="body2">
                Already have an account? Sign in
            </Link>
        </Container>
    );
}

{
    /* LATER FOR PRIVACY NOTICE!!!
        goes under the button

    <FormControlLabel
        control={
            <Checkbox value="allowExtraEmails" color="primary" />
        }
        label="I want to receive inspiration, marketing promotions and updates via email."
    /> */
}
