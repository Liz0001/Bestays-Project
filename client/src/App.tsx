import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './config/theme';

import { Contact } from './components/contact/Contact';
import { AboutPage } from './components/aboutPage/AboutPage';
import { LandingPage } from './components/landingPage/LandingPage';
import { Page404 } from './components/page404/Page404';

export default function App() {
    // <Route path="/dashboard" element={<Dasboard />} />
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </ThemeProvider>
    );
}
