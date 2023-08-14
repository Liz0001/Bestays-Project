import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { PageStatus } from '../../../enums/pageStatus';
import { registerUser } from '../../../store/features/loginRegister/registerSlice';
import { Box, Button, Container, Link, TextField } from '@mui/material';
import EmailValidator from 'email-validator';
import './register.css';

export function Register() {
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

    const [validateName, setValidateName] = useState(true);
    const [validateEmail, setValidateEmail] = useState(true);
    const [validatePass, setValidatePass] = useState(true);

    function validateData() {
        const name = userSignUpData.name.trim().length > 1;
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
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        validateData();

        if (validateEmail && validateName && validatePass) {
            dispatch(registerUser(userSignUpData));
        }
    };

    useEffect(() => {
        // TODO:
        if (register.registerStatus == PageStatus.loading) {
            console.log('Loading spinner will be added here');
        }
        if (register.registerStatus == PageStatus.success) {
            console.log('With SUCCESS user is directed to login page!');
        }
    }, [register.registerStatus]);

    return (
        <Container
            maxWidth="xs"
            style={{
                width: '100vw',
                height: '100vh',
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
                    helperText={validateName ? '' : `Name can't be empty!`}
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
                    helperText={validateEmail ? '' : 'This email is not valid!'}
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
                    helperText={
                        (userSignUpData.passwordCheck !==
                            userSignUpData.password &&
                            userSignUpData.passwordCheck.length > 4) ||
                        !validatePass
                            ? 'MAKE SURE PASSWORDS MATCH'
                            : ''
                    }
                    onChange={changeHandler}
                    value={userSignUpData.passwordCheck}
                />

                <Button type="submit" variant="contained">
                    Sign up
                </Button>

                {/* LATER FOR PRIVACY NOTICE!!!
                <FormControlLabel
                    control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
            </Box>
            <Link href="/signin" variant="body2">
                Already have an account? Sign in
            </Link>
        </Container>
    );
}
