import { useEffect, useState } from "react";

export const Login = () => {
    

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    useEffect(() => {
        console.log(email);  
    }, [email]);

    useEffect(() => {
        console.log(pass);  
    }, [pass]);

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

        </div>
    );
}