import { useState, useEffect } from 'react';
import "./loader.scss";

export default function ApiFetch({ children, url }) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur de chargement');
                }
                return response.json();
            })
            .then((jsonData) => {
                setData(jsonData);
                setError(null);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            });
    }, [url]);

    if (isLoading) {
        return (
            <div className="container">
                <div className="container__content">
                    <span className="loader"></span>
                </div>
            </div>
        );
    }

    if (error) {
        return <div className="error">Erreur : {error}</div>;
    }

    // Appel de `children` en tant que fonction avec les données passées en argument
    return <>{data && children(data)}</>;
}
