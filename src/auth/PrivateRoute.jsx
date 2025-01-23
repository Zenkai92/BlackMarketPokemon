import { useAuth } from "./AuthProvider";
import { Login } from "./LogInOut";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";

function PrivateRoute({ children }) {
  const { user } = useAuth();
  const [showAlert, setShowAlert] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!user && showAlert) {
      alert("Accès refusé. Connectez-vous d'abord");
      setShowAlert(false);
    }
  }, [user, showAlert]);

  useEffect(() => {
    if (!user && location.pathname !== "/") {
      setShowAlert(true);
    }
  }, [user, location.pathname]);

  return user ? (
    children
  ) : (
    <>
      <p>Accès refusé. Connectez-vous d abord</p>
      <Login />
    </>
  );
}

export default PrivateRoute;