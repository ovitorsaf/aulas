import { useEffect, useMemo, useState } from "react";

export const Login = () => {
    
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const emailLength = useMemo(() => {
        console.log('executou')
        return email.length * 1000
    }, [email.length]);

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
                
                <p>Quantidade de caracteres no email: {emailLength}</p>

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