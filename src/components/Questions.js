import {useState} from "react"
import FlashCard from "./FlashCard";
import playButton from "../img/play.png"


export default function Questions({sendQuestionsToFlashCards}) {
    const questions = [
        { number:'Pergunta 1', question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript' },
        { number:'Pergunta 2', question: 'O React é __', answer: 'uma biblioteca JavaScript para construção de interfaces' },
        { number:'Pergunta 3', question: 'Componentes devem iniciar com __', answer: 'letra maiúscula' },
        { number:'Pergunta 4', question: 'Podemos colocar __ dentro do JSX', answer: 'expressões' },
        { number:'Pergunta 5', question: 'O ReactDOM nos ajuda __', answer: 'interagindo com a DOM para colocar componentes React na mesma' },
        { number:'Pergunta 6', question: 'Usamos o npm para __', answer: 'gerenciar os pacotes necessários e suas dependências' },
        { number:'Pergunta 7', question: 'Usamos props para __', answer: 'passar diferentes informações para componentes' },
        { number:'Pergunta 8', question: 'Usamos estado (state) para __', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' }
    ]
    const [selected, setSelected] = useState(false);
    const [numberSelected, setNumberSelected] = useState('');
    const [flashCardData, setFlashCardData] = useState('');
    const [verifyCompleted, setVerifyComplete] = useState({cardNumber: "", color: "", completed: false})

    function questionSelected(number){
        setSelected(true);
        setNumberSelected(number);
    }
    const sendFlashToQuestions = (infoFooter)=>{
        setFlashCardData(infoFooter);
        sendQuestionsToFlashCards(flashCardData)
        setVerifyComplete(infoFooter)
    }
    return (
        <>
        {questions.map(question=>
                <>
                {(selected && numberSelected === question.number && !verifyCompleted.completed) ?
                    <FlashCard number={question.number} question={question.question} answer={question.answer} sendFlashToQuestions={sendFlashToQuestions} />
                    : flashCardData.cardNumber === question.number ?
                        <div className="number">
                            <p className={flashCardData.color}> {question.number} </p>
                            <img src={flashCardData.img} alt="feedback icon" />
                        </div> :
                        <div onClick={() => questionSelected(question.number)} className="number">
                            <p className="question-number">{question.number} </p>
                            <img src={playButton} alt="play icon" />
                        </div>
                }
            </>
            )}
        </>
    )
}