import { useState } from "react"
import logo from "../img/logo.png"
import FlashCards from "./FlashCards"

export default function Home(){
    const [start, setStart] = useState(true);
    return start ?(
        <>
            <div className="home">
                <img src={logo} alt='logo'/>
                <h1>ZapRecall</h1>
                <button onClick={()=>setStart(false)}>Iniciar Recall</button>
            </div>
        </>
    ):(
        <>
            <FlashCards />
        </>
    )
}