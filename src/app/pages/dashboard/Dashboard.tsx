
import { useCallback, useState } from 'react';


export const Dashboard = () => {

    const [lista, setLista] = useState<string[]>([]);

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if(e.key === 'Enter'){
            if(e.currentTarget.value.trim().length === 0) return;

            const value = e.currentTarget.value;

            setLista((oldLista) => {
                if(oldLista.includes(value)) return oldLista;
                return [...oldLista, value];
            });

            e.currentTarget.value = '';
        }
    }, []);


    return(
        <div>
            
            <h1>Home | Dashboard</h1>

            <input type="text"
                onKeyDown={handleInputKeyDown}
            />

            <p>Lista</p>
                {lista.map((value, index) => {
                    return <li key={value}>{value}</li>
                })}
            <ul></ul>

        </div>
    );

}