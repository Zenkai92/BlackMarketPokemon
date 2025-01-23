import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Contact from "../components/Contact/Contact";
import FetchPokemon from "../components/FetchPokemon/FetchPokemon";
import { AuthProvider } from "../auth/AuthProvider";


export default function Router() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Produit" element={<FetchPokemon />} />
        <Route path="/Contact" element={<Contact />} />
        
      </Routes>
    </AuthProvider>
  );
}