import { useLocation, useNavigate } from "react-router";
import "./header.scss";

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    const pageName = location.pathname.split("/").pop();
    const displayName = pageName ? pageName : "Accueil";

    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div className="header">
            {displayName !== "Accueil" && (
                <a onClick={handleGoBack}>
                    <img className="header__arrowToLeft" src="./fleche.png" alt="Retour" />
                </a>
            )}
            <img className="header__logo" src="./Gromago-Mascotte" alt="Logo Gromago" />
            <h1 className="header__title">ToupourleMAGO{displayName}</h1>
            <p>Bienvenue sur plus grand marché noir de Unys </p>
        </div>
    );
}