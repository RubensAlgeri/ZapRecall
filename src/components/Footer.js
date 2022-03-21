import party from '../img/party.png'
import sad from '../img/sad.png'
import {useState} from 'react'

export default function Footer(props){
    const {complete, img, error} = props


    return(
        <footer>
            {complete > 8 ? 
            error === 0 ?
            <>
            <img className='emoji' src={party} alt="party emoji"></img>
            <h5>Parabéns!</h5>
            <h6>Você não esqueceu de nenhum flashcard!</h6>
            </>:
            <>
                <img className='emoji' src={sad} alt="sad emoji"></img>
                <h5>Putz...</h5>
                <h6>{`Ainda faltam alguns...  
                    Mas não desanime!`}
                </h6>
            </>:
            <>
            </>}
            <p>{complete}/8 CONCLUÍDOS</p>
            <div className="icons">
                {img.map(img=>
                    <img src={img}></img>
                )}
            </div>
        </footer>
    )
}