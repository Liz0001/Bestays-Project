import { NavbarPublic } from '../navbars/navbarPublic/NavbarPublic';
import { IntroSection } from './IntroSection';
import { HeroSection } from './HeroSection';

export function LandingPage() {
    return (
        <>
            <NavbarPublic />
            <HeroSection />
            <IntroSection />
        </>
    );
}
