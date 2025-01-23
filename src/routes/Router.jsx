import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Contact from "../components/Contact/Contact";
import FetchPokemon from "../components/FetchPokemon/FetchPokemon";
import { AuthProvider } from "../auth/AuthProvider";
import PrivateRoute from "../auth/PrivateRoute";
import Page404 from "../components/Page404/Page404";

export default function Router() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route path="/Produit" element={<PrivateRoute><FetchPokemon /></PrivateRoute>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </AuthProvider>
  );
}
