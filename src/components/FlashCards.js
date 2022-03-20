import Header from "./Header"
import Questions from "./Questions"
import Footer from "./Footer"

export default function FlashCards() {
        return (
            <>
            <Header />
        <section className="numbers">
            <Questions />
        </section>
            <Footer />
            </>
    )
}