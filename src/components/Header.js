import logo from "../img/logo.png"

export default function Header(){
    return(
        <header>
            <img src={logo} alt='logo'/>
            <h1>ZapRecall</h1>
        </header>
    )
}