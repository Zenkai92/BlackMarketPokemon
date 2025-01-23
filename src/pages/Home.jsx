import { Link } from 'react-router';
import { Login, Logout } from "../auth/LogInOut";
import { useAuth } from "../auth/AuthProvider";

export default function Home() {
    const { user } = useAuth();
    return (
        <div>
            <Link to = "/Produit">
                <button>Voir les produits</button>
            </Link>
            <Link to = "/Contact">
                <button>Pour ne pas nous contacter</button>
            </Link>
               {user ? (
                <>Bienvenue {user.username}
                <Logout/>
                </>
               ):(
                <Login/>
               )}
        </div>
    );
}