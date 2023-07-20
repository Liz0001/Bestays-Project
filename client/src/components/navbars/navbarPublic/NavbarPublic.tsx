import * as React from 'react';
import {
    Container,
    Button,
    Typography,
    Toolbar,
    ListItemText,
    ListItemButton,
    ListItem,
    List,
    IconButton,
    Drawer,
    Divider,
    CssBaseline,
    Box,
    AppBar,
    Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../../assets/logo/bestays_logo.svg';
import Logo2 from '../../../assets/logo/bestays_logo_small.svg';

import './navbarPublic.css';

export function NavbarPublic() {
    const navItems = ['About', 'Contact'];
    const goToSignIn = '/signin';
    const drawerWidth = 240;

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <Link href="/">
                    <img src={Logo} alt="Bestays Logo" />
                </Link>
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton
                            href={`/` + item.toLowerCase()}
                            sx={{ textAlign: 'center' }}
                        >
                            <ListItemText
                                className="mobile-menu-links"
                                primary={item}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Button
                // sx={{ textTransform: 'none' }}
                className="signin-button drawer"
                href={goToSignIn}
                variant="outlined"
            >
                Sign in
            </Button>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" position="static" className="navbarr">
                <Container maxWidth="xl">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon sx={{ color: '#E16913' }} />
                        </IconButton>

                        {/* <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Bestays
                        </Typography> */}

                        <Typography
                            variant="h1"
                            component="div"
                            sx={{
                                mb: -1.5,
                                ml: -1,
                                flexGrow: 1,

                                display: { xs: 'none', sm: 'block' },
                                // display: { sm: 'block' },
                            }}
                        >
                            <Link href="/">
                                <img src={Logo} alt="Bestays Logo" />
                            </Link>
                        </Typography>
                        {/* !!!!!!!!! */}
                        {/* BELOW IS small logo */}

                        <Typography
                            variant="h6"
                            component="div"
                            className="small-logo-div"
                            sx={{
                                // mb: -1,
                                flexGrow: 1,
                                display: { xs: 'block', sm: 'none' },
                            }}
                        >
                            {/* <div className="nav-small-logo"> */}
                            <Link href="/">
                                <img
                                    className="nav-small-logo"
                                    src={Logo2}
                                    alt="Bestays Logo"
                                />
                            </Link>
                            {/* </div> */}
                        </Typography>

                        {/* <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO0
                        </Typography> */}

                        {/* Above IS small logo */}
                        {/* !!!!!!!!! */}

                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Button
                                    href={`/` + item.toLowerCase()}
                                    key={item}
                                    sx={{ color: '#E16913' }}
                                >
                                    {item}
                                </Button>
                            ))}

                            <Button
                                className="signin-button navbar"
                                href={goToSignIn}
                                variant="outlined"
                                sx={{ color: '#E16913' }}
                            >
                                Sign in
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Box component="nav" position="static">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}
