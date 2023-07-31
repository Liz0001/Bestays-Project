import { NavbarPublic } from '../navbars/navbarPublic/NavbarPublic';
import { AddedValueSection } from './AddedValueSection';
import { HeroSection } from './HeroSection';

export function LandingPage() {
    return (
        <>
            <NavbarPublic />
            <HeroSection />
            <AddedValueSection />
        </>
    );
}
