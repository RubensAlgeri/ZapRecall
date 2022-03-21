import turnIcon from "../img/turn.png"
import { useState } from "react"
import wrong from "../img/wrong.png"
import right from "../img/right.png"
import almost from "../img/question.png"


export default function FlashCard({complete, question, answer, number, sendFlashToQuestions}) {
    const [turn, setTurn] = useState(false)
    const [answered, setAnswered] = useState(0);
    const [verifyCompleted, setVerifyComplete] = useState({img:"",cardNumber: "", color: "", completed: false})


    function completed(img, error, cardNumber, color, completed){
        setAnswered(answered+1);
        console.log("completed",error)
        const infoFooter = {
            img: img,
            error: error,
            color: color,
            cardNumber: cardNumber,
            completed: completed
        }
        setVerifyComplete({img: img, color: color, completed: completed, cardNumber:cardNumber})
        if(complete<8)sendFlashToQuestions(infoFooter);
    }
    return turn ? (
        <div className="flash-card">
            <>
                <p className="card">{answer}</p>
                <div className="feedback-buttons">
                    <span onClick={() => completed(wrong, 1, number, 'red', true)} className="feedback">Não lembrei</span>
                    <em onClick={() => completed(almost, 0, number, 'orange', true)} className="feedback">Quase não lembrei</em>
                    <b onClick={() => completed(right, 0, number, 'green', true)} className="feedback">Zap!</b>
                </div>
            </>
        </div>
    ) : !verifyCompleted.completed ? (
        <div className="flash-card">
            <>
                <p className="card">{question}</p>
                <img onClick={() => setTurn(true)} src={turnIcon} alt="turn-icon"></img>
            </>
        </div>
    ):
        (
            <div className="number">
                <p className={verifyCompleted.color}> {verifyCompleted.cardNumber} </p>
                <img src={verifyCompleted.img} alt="feedback icon" />
            </div>
        )

}