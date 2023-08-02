import { NavbarPublic } from '../navbars/navbarPublic/NavbarPublic';
import { MoreInfoSection } from './MoreInfoSection';
import { HeroSection } from './HeroSection';

export function LandingPage() {
    return (
        <>
            <NavbarPublic />
            <HeroSection />
            <MoreInfoSection />
        </>
    );
}
