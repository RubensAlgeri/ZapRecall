import playButton from "../img/play.png"

export default function Question({completed, sendQuestionToQuestions, question}){
    function questionSelected(number){
        sendQuestionToQuestions(number)
    }
    console.log("question",completed)
    return (
        <>
        {question.map(question=>
            completed.completed ?
            <div onClick={() => questionSelected(question.number)} className="number">
            <p className="question-number">{question.number} </p>
            <img src={playButton} alt="play icon" />
        </div>:
                <div className="number">
                    <p className={completed.color}> {completed.cardNumber} </p>
                    <img src={completed.img} alt="feedback icon" />
                </div>
        )}
        </>
)
}