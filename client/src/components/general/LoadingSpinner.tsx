import { CircularProgress } from '@mui/material';
import './loadingSpinner.css';

export default function LoadingSpinner() {
    return (
        <div className="spinner">
            <CircularProgress color="primary" />
        </div>
    );
}
