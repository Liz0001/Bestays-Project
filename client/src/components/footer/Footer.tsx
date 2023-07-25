import { Container, Link, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

// import Logo from '../../assets/logo/bestays_logo_small.png';
import './footer.css';
import './sticky-footer.css';

export function Footer() {
    function getYear() {
        return new Date().getFullYear();
    }

    return (
        <div className="footer">
            <Container sx={{ height: '100%' }}>
                <div className="footer-content">
                    <h2 className="logo-font">BESTAYS</h2>
                    <Typography sx={{ fontSize: 14 }}>
                        Embrace every moment, never forget a celebration!
                    </Typography>
                    <div className="footer-social">
                        <Link
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </Link>
                        <Link
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link href="/contact">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </Link>
                    </div>
                    <Typography sx={{ fontSize: 12 }}>
                        Copyright &copy; {getYear()}
                    </Typography>
                </div>
            </Container>
        </div>
    );
}
