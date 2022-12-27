import { createContext } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode;
}

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {
    
    const username = 'Cleitinho';
    
    return(
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: username }}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}