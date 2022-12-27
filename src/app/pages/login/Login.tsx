import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export const Login = () => {
    
    const inputPassRef = useRef<HTMLInputElement>(null);
    
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const emailLength = useMemo(() => {
        return email.length * 1000
    }, [email.length]);

    useEffect(() => {
        console.log(email);  
        console.log(pass);  
    }, [email, pass]);

    const handleEntrar = useCallback(() => {
        console.log(email, ' | ', pass);
    }, [email, pass]);

    return(
        <div>
            <form>
                
                <p>Quantidade de caracteres no email: {emailLength}</p>

                <label>
                    <span>Email</span>
                    <input 
                        type="text" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' ? inputPassRef.current?.focus() : undefined}
                    />
                </label>

                <label>
                    <span>Senha</span>
                    <input 
                        type="password" 
                        value={pass} 
                        ref={inputPassRef}
                        onChange={e => setPass(e.target.value)}
                    />
                </label>

                <button type="button" onClick={handleEntrar}>Entrar</button>
            
            </form>
        </div>
    );
}