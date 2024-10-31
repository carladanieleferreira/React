import { useState } from "react"

export const Exercicio4 =()=>{

    const[inputText, setInputText] = useState('')
    const[display, setDisplay] = useState('')

    function pegarValor(event){
        setInputText(event.target.value)
    }
    function enviar(){
        setDisplay(inputText)
    }
    return(
        <div>
            <input onChange={pegarValor} type="text" placeholder="Digite seu email" />
            <button onClick={enviar}>Enviar</button>
            texto exibido {display}
        </div>
    )
}


//Criar um componente que contém um campo de entrada de texto e um botão,
// o texto digitado deve ser exibido abaixo do campo e ao clicar no botão, 
//exiba o texto na tela.