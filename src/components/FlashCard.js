import turn from "../img/turn.png"


export default function FlashCards(){
    return(
        <div className="flash-card">
            <p>{question}</p> <p>{answer}</p>
            <img src={turn} alt="turn-icon"></img>
            <span className="feedback">Não lembrei</span> <em className="feedback">Quase não lembrei</em> <b className="feedback">Zap!</b>
        </div>
    )
}