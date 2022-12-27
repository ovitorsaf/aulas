import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/InputLogin";

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

                <InputLogin
                    label="Email"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPassRef.current?.focus()}
                />

                <InputLogin
                    type="password"
                    label="Senha"
                    value={pass}
                    ref={inputPassRef}
                    onChange={newValue => setPass(newValue)}
                />

                {/*
                <button 
                    type="button" 
                    onClick={handleEntrar}>
                    Entrar
                </button>
                */}
                
                <ButtonLogin type="button" onClick={handleEntrar}>
                    Entrar
                </ButtonLogin>
            
            </form>
        </div>
    );
}