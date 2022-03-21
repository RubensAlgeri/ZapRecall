import playButton from "../img/play.png"

export default function Question(){
    return (
        <>
        <div className="number">
            <p>{number}</p>
            <img src={playButton} alt="play icon"/>
        </div>
        </>
)
}