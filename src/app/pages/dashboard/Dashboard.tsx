import { useCallback, useEffect, useState } from 'react';
import { ApiException } from '../../shared/services/api/ApiException';
import { ITarefa, TarefasService } from '../../shared/services/api/tarefas/TarefasService';
import { Link } from 'react-router-dom';


export const Dashboard = () => {

    const [lista, setLista] = useState<ITarefa[]>([]);

    useEffect(() => {
        TarefasService.getAll()
            .then((result) => {
                if (result instanceof ApiException){
                    alert(result.message);
                } else {
                    setLista(result);
                }
                
            });
    }, []);

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {
          if (e.currentTarget.value.trim().length === 0) return;
    
          const value = e.currentTarget.value;
    
          e.currentTarget.value = '';
    
          if (lista.some((listItem) => listItem.title === value)) return;
    
          TarefasService.create({ title: value, isCompleted: false })
            .then((result) => {
              if (result instanceof ApiException) {
                alert(result.message);
              } else {
                /* Esta com erro porém ainda executa a criação no banco... Verificando no Discord o que pode ser */
                setLista((oldLista) => {
                    return [...oldLista, result];
                });
              }
            });
        }
      }, [lista]);

    const handleToggleComplete = useCallback((id: number) => {
        
        const tarefaToUpdate = lista.find((tarefa) => tarefa.id === id);

        if (!tarefaToUpdate) return;
        
        TarefasService.updateById(id, {
            ...tarefaToUpdate,
            isCompleted: !tarefaToUpdate.isCompleted
        })
        .then((result) => {
            if (result instanceof ApiException) {
                alert(result.message);
              } else {
                /* Esta com erro porém ainda executa a criação no banco... Verificando no Discord o que pode ser */
                setLista((oldLista) => {
                    return oldLista.map(oldListItem => {
                        if (oldListItem.id === id) return result;
                        return oldListItem;
                    });
                });
              }
        });
        
        
    }, [lista]);  

    const handleDelete = useCallback((id: number) => {
        
        TarefasService.deleteById(id)
        .then((result) => {
            if (result instanceof ApiException) {
                alert(result.message);
              } else {
                setLista((oldLista) => {
                    return oldLista.filter((oldListItem) => oldListItem.id !== id);
                });
              }
        });        
    }, []); 


    return(
        <div>
            
            <h1>Home | Dashboard</h1>

            <input type="text"
                onKeyDown={handleInputKeyDown}
            />

            <p>Lista</p>
            
            <p>{lista.filter((listItem) => listItem.isCompleted).length}</p>

            <ul>
                {lista.map((listItem) => {
                    return <li key={listItem.id}>
                            <input 
                                type="checkbox"
                                checked={listItem.isCompleted}
                                onChange={() => handleToggleComplete(listItem.id)}
                            />
                            {listItem.title}
                            
                            <button onClick={() => handleDelete(listItem.id)}>Apagar</button>
                        </li>
                })}
            </ul>
                
            <br/>
            
            <button>
                <Link to='/entrar'>Login</Link>
            </button>

        </div>
    );
}