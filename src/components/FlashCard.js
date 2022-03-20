import turnIcon from "../img/turn.png"
import { useState } from "react"


export default function FlashCard(props) {
    const [turn, setTurn] = useState(false)

    return turn ? (
        <div className="flash-card">
            {props.map(answer =>
                <>
                    <p className="card">{answer.answer}</p>
                    <img onClick={() => setTurn(false)} src={turnIcon} alt="turn-icon"></img>
                    <span className="feedback">Não lembrei</span> <em className="feedback">Quase não lembrei</em> <b className="feedback">Zap!</b>
                </>
            )}
        </div>
    ) : (
        <div className="flash-card">
            {props.map(question =>
                <>
                    <p className="card">{question.question}</p>
                    <img onClick={() => setTurn(true)} src={turnIcon} alt="turn-icon"></img>
                </>
            )}
        </div>
    )
}