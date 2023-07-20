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
    },
    typography: {
        fontSize: 14,
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
