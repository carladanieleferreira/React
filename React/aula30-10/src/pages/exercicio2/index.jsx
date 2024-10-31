import { useState } from 'react'
export const Exercicio02 = () =>{

    const[color, setColor] = useState("red")

    function alterar(){
        setColor(prevState =>prevState ==="#f00"? "blue" : "#f00")
    }

    return(
        <div style ={{backgroundColor: color}}>
            <button onClick={alterar}>alterar</button>
        </div>
    )
}










//Criar um componente que exibe um botão, ao clicar no botão, 
//a cor de fundo do botão deve mudar entre duas cores diferentes (ex: vermelho e azul), 
//use o callback do useState para essa troca