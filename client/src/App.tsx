import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './config/theme';

import { Contact } from './components/contact/Contact';
import { AboutPage } from './components/aboutPage/AboutPage';
import { LandingPage } from './components/landingPage/LandingPage';
import { Page404 } from './components/page404/Page404';
import { Footer } from './components/footer/Footer';
import { NavbarPublic } from './components/navbars/navbarPublic/NavbarPublic';

export default function App() {
    const welcomePages = ['/', '/about', '/contact'].includes(
        window.location.pathname
    );

    return (
        <ThemeProvider theme={theme}>
            {welcomePages && <NavbarPublic />}
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/bestays/">
                    {/* <Route path="/" element={<Board />} /> */}
                    {/* <Route path="/profile" element={<Profile />} /> */}
                </Route>
                <Route path="*" element={<Page404 />} />
                {/* <Route path="/admin" element={<Admin />} /> */}
            </Routes>
            {welcomePages && <Footer />}
        </ThemeProvider>
    );
}
