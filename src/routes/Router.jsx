import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import FetchPokemon from "../components/FetchPokemon/FetchPokemon";
import { AuthProvider } from "../auth/AuthProvider";

export default function Router() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Produit" element={<FetchPokemon />} />
      </Routes>
    </AuthProvider>
  );
}