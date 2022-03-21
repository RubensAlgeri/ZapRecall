import Header from "./Header"
import Questions from "./Questions"
import {useState} from 'react'
import Footer from "./Footer"

export default function FlashCards() {
    const [questionsData, setQuestionsData] = useState({img:'',complete:0, error: 0})
    const [errorsCount, setErrorsCount] = useState(0)
    const [icons, setIcons] = useState([]);
    
    const sendQuestionsToFlashCards = (dataFromQuestions) =>{
        setQuestionsData(dataFromQuestions);
        if(dataFromQuestions.error === 1) setErrorsCount(errorsCount+1);
        setIcons([...icons, dataFromQuestions.img]);
    }
    console.log("sendQ", questionsData, errorsCount)
    return (
            <>
                <Header />
                <section className="numbers">
                    <Questions sendQuestionsToFlashCards={sendQuestionsToFlashCards} />
                </section>
                <Footer img={icons} complete={questionsData.complete} error={errorsCount} />
            </>
    )
}