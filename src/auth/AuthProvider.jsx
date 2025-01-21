import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const storedUser = Cookies.get("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (username, password) =>{
        if (username === "admin" && password === "1234") {
            const newUser = { username };
            setUser(newUser);
            Cookies.set("user", JSON.stringify(newUser), { expires: 1 });
        }else{
            alert
        }
    };
    
    const logout = () => {
        setUser(null);
        Cookies.remove("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("Authentification Impossible");
    }
    return context;
}