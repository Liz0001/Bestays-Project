import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { PageStatus } from '../../../enums/pageStatus';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import {
    registerUser,
    setRegisterStatus,
} from '../../../store/features/loginRegister/registerSlice';
import {
    Box,
    Button,
    Container,
    IconButton,
    InputAdornment,
    Link,
    TextField,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoadingSpinner from '../../general/LoadingSpinner';
import EmailValidator from 'email-validator';
import './register.css';

export function RegForm() {
    const navigate = useNavigate();
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

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

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

        if (!validatePass) {
            toast.error(
                `Password must be at least: 6 letters, 1 special symbol, 1 number!`
            );
        }

        if (userSignUpData.password != userSignUpData.passwordCheck) {
            toast.error(`Passwords don't match`);
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

    useEffect(() => {
        if (register.registerStatus == PageStatus.success) {
            navigate('/signin');
            dispatch(setRegisterStatus(PageStatus.initial));
        }
    }, [navigate, register, dispatch]);

    if (register.registerStatus == PageStatus.loading) {
        return <LoadingSpinner />;
    }

    return (
        <Container className="reg-container" maxWidth="xs">
            <h1 className="heading">Create Account</h1>
            <Box
                className="reg-form"
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
            >
                <TextField
                    className="form-input"
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
                    className="form-input"
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
                    className="form-input password"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? (
                                        <Visibility />
                                    ) : (
                                        <VisibilityOff />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    id="password"
                    autoComplete="new-password"
                    onChange={changeHandler}
                    value={userSignUpData.password}
                    helperText="Password must be at least: 6 letters, 1 special symbol, 1 number!"
                />
                <TextField
                    className="form-input password"
                    required
                    fullWidth
                    name="passwordCheck"
                    label="Repeat Password"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? (
                                        <Visibility />
                                    ) : (
                                        <VisibilityOff />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    id="passwordCheck"
                    autoComplete="new-password"
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
