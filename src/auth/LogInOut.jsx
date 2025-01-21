import { useAuth } from './AuthProvider';
import { useState } from 'react';

function Login() {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Se connecter</button>
        </form>
    );
}


function Logout() {
    const { logout } = useAuth();
    return <button onClick={logout}>Se déconnecter</button>;
}

export { Login, Logout };
