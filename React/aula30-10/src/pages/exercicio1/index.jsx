import {useReducer} from 'react'

export const ExercicioReducer = () =>{

    const estadoInicial = {count:0}

    function usandoReducer(state,action){
        switch(action.type){
            case 'Aumentar':
                return {count: state.count + 1}
            case 'Diminuir':
                return {count: state.count - 1}
            case 'Resetar':
                return estadoInicial;
            default:
                return new Error();
        }
    }

    const [state,dispatch] = useReducer(usandoReducer, estadoInicial)

    return(
        <div>
            <span>Contador: {state.count}</span>
            <button onClick={()=>dispatch({type:'Aumentar'})}>Aumentar</button>
            <button onClick={()=>dispatch({type:'Diminuir'})}>Diminuir</button>
            <button onClick={()=>dispatch({type:'Resetar'})}>Resetar</button>
        </div>
    )


}

//Criar um componente que utiliza useReducer para gerenciar o estado de um contador, 
//o componente deve ter botões para aumentar, diminuir e um pra resetar o contador.