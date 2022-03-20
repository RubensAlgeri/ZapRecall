import {useState} from "react"
import FlashCards from "./FlashCards";

export default function Questions(props) {
    const {number, question, answer} = props;
    const [selected, setSelected] = useState(false)
    return(
        <>
            <div className="number">
                <p onClick={() => setSelected(true)}>{number}</p>
            </div>
            <FlashCards number={number} question={question} answer={answer}/>
        </>
    )
}