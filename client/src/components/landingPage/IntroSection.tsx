import {
    faCakeCandles,
    faCalendarDays,
    faChampagneGlasses,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from '@mui/material';

export function IntroSection() {
    return (
        <Container maxWidth="lg" className="bottom-section">
            <div className="offer-section">
                <h2 className="intro">We help you to keep up with: </h2>
                <div className="examples">
                    <div>
                        <FontAwesomeIcon icon={faCakeCandles} />
                        <span className="example-name">Birthdays</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faChampagneGlasses} />
                        <span className="example-name">Anniversaries</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCalendarDays} />
                        <span className="example-name">Important dates</span>
                    </div>
                </div>
                <h2 className="outro">
                    ... and send you a personalised reminders
                </h2>
                <div className="description">
                    <span className="strong-text">Bestays</span> is a user
                    friendly <span className="strong-text">event reminder</span>{' '}
                    designed to keep track of your best days, birthdays,
                    anniversaries, and other important dates, ensuring they are
                    never forgotten, allowing you to cherish and celebrate every
                    occasion.
                </div>
            </div>
        </Container>
    );
}
