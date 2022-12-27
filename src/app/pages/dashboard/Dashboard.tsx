import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useUsuarioLogado } from '../../shared/hooks';

export const Dashboard = () => {

    const counterRef = useRef({ counter: 0 });

    const {nomeDoUsuario, logout} = useUsuarioLogado();

    return(
        <div>
            
            <h1>Home | Dashboard</h1>
            
            <h3>Usuário: {nomeDoUsuario}</h3>
            
            <p>Contador: {counterRef.current.counter}</p>
            
            <button onClick={() => counterRef.current.counter++}>Somar</button>
            <button onClick={() => console.log(counterRef.current.counter)}>Log</button>
            <button onClick={logout}>Logout</button>
            <br/>
            <Link to="/entrar">Login</Link>

        </div>
    );

}