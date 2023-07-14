import { Routes, Route } from 'react-router-dom';
// import { ThemeProvider } from '@mui/material';
// import { theme } from './config/theme';

import { Contact } from './components/contact/Contact';
import { AboutPage } from './components/aboutPage/AboutPage';
import { LandingPage } from './components/landingPage/LandingPage';
import { Page404 } from './components/page404/Page404';

export default function App() {
    // <ThemeProvider theme={theme}> wrap around .... </ThemeProvider>
    // <Route path="/dashboard" element={<Dasboard />} />
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}
