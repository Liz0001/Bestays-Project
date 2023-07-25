import { createTheme } from '@mui/material';
// #E16913 - font main orange
// #565656 - fort secondary dark

const theme = createTheme({
    palette: {
        primary: {
            main: '#E16913',
        },
        secondary: {
            main: '#565656',
        },
        background: {
            default: '#fff',
        },
        text: {
            primary: '#565656',
        },
    },
    typography: {
        fontSize: 14,
        fontFamily: "'Inter' sans-serif",
        fontWeightRegular: 400,
        fontWeightBold: 700,
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: '#fff',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    textTransform: 'none',
                },
            },
        },
    },
});

export default theme;
