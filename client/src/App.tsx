import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './config/theme';

import { LandingPage } from './components/landingPage/LandingPage';
import { AboutPage } from './components/aboutPage/AboutPage';
import { Contact } from './components/contact/Contact';
import { Page404 } from './components/page404/Page404';
import { Footer } from './components/footer/Footer';

export default function App() {
    const welcomePages = ['/', '/about', '/contact'].includes(
        window.location.pathname
    );

    return (
        <ThemeProvider theme={theme}>
            <main>
                <Routes>
                    {/* Public routes */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/*" element={<Page404 />} />

                    {/* PRIVATE ROUTES LATER */}
                    {/* <Route path="/bestays/*"> */}
                    {/* <Route path="" element={<Board />} /> */}
                    {/* <Route path="/profile" element={<Profile />} /> */}
                    {/* <Route path="*" element={<Page404 />} /> */}
                    {/* </Route> */}
                    {/* <Route path="/admin" element={<Admin />} /> */}
                </Routes>
            </main>
            {welcomePages && <Footer />}
        </ThemeProvider>
    );
}
