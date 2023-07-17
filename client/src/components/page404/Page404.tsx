import './page404.css';

export function Page404() {
    return (
        <div className="not-found">
            <div className="text-404">
                <h2>Oi Oops ... </h2>
                <p>We couldn't find this page!</p>
                <p>
                    Seems like <span className="oops">{location.pathname}</span>{' '}
                    is not part of this site!
                </p>
            </div>
        </div>
    );
}
