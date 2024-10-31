import { useState } from "react"


export const Exercicio3 = () => {

    const[estadoInicial, setEstadoInicial] = useState(0)

    function contar(){
        setEstadoInicial(estadoInicial + 1)
        //setEstadoInicial(prevState => prevState + 1)
    }

    return(
        <div>
            Contou:{estadoInicial}
           <button onClick={contar}>Contador</button> exercicio3
        </div>
    )
}










// Criar um componente que mantém um contador do número de vezes que um botão foi clicado, 
//mostre o número de cliques na tela,
// use a forma literal do useState para fazer essa contagem.