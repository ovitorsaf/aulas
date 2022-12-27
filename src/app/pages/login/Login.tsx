import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UsuarioLogadoContext } from "../../shared/contexts";

import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {
    
    const {nomeDoUsuario} = useContext(UsuarioLogadoContext);
    
    const navigator = useNavigate();

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
                
                <h3>Usuário: {nomeDoUsuario}</h3>

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
                
                <ButtonLogin type="button" onClick={handleEntrar}>
                    Entrar
                </ButtonLogin>

                <h5 onClick={() => navigator(-1)}>Voltar</h5>
            
            </form>
        </div>
    );
}