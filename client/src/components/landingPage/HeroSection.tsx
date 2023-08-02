import { Button } from '@mui/material';
import balloons from '../../assets/images/balloons.png';
import './landingPage.css';

export function HeroSection() {
    return (
        <div className="bg-container">
            <div className="bg-image">
                <div className="landing-page">
                    <div className="wrapper">
                        <div className="balloon-img">
                            <img src={balloons} alt="Bestay balloons" />
                        </div>
                        <h1 className="heading">
                            Never miss a moment worth celebrating
                        </h1>
                        <p className="value-proposition">
                            Sign up for Bestays now and stay organized, cherish
                            your best days, and create lasting memories
                            effortlessly!
                        </p>
                        <div className="button-wrap">
                            <Button
                                href="/signup"
                                variant="outlined"
                                size="large"
                            >
                                Sign up now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
