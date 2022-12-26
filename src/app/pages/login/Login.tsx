import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleEntrar = () => {
        console.log(email, ' | ', pass);
    }

    return(
        <div>
            <form>
                
                <label>
                    <span>Email</span>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                </label>

                <label>
                    <span>Senha</span>
                    <input type="password" value={pass} onChange={e => setPass(e.target.value)} />
                </label>

                <button type="button" onClick={handleEntrar}>Entrar</button>
            
            </form>

            <h5 onClick={() => navigate(-1)}>Voltar</h5>
        </div>
    );
}