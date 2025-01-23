import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./Page404.scss";

export default function Page404() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    // Nettoyage du timer
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="page-404">
      <h1>404</h1>
      <p>Oups ! La page que vous cherchez n existe pas.</p>
      <p>Vous allez être redirigé(e) vers la page d accueil dans 3 secondes...</p>
    </div>
  );
}
